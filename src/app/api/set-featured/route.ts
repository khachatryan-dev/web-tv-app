import { NextResponse } from 'next/server';
import path from 'path';
import { promises as fs } from 'fs';
import {Video} from "@/types";

export async function PATCH(req: Request) {
    try {
        const body = await req.json();
        const { id } = body;

        if (!id) {
            console.error('Missing video ID in request body');
            return NextResponse.json({ error: 'Missing video id' }, { status: 400 });
        }

        const jsonDirectory = path.join(process.cwd(), 'src', 'data');
        const filePath = path.join(jsonDirectory, 'videos.json');

        const fileContents = await fs.readFile(filePath, 'utf8');

        const data = JSON.parse(fileContents);

        const trendingList = data.TendingNow;
        if (!Array.isArray(trendingList)) {
            console.error('TendingNow is not an array');
            return NextResponse.json({ error: 'Invalid trending list' }, { status: 500 });
        }

        const foundVideo = trendingList.find((video: Video) => video.Id === id);
        if (!foundVideo) {
            console.error('Video not found with id:', id);
            return NextResponse.json({ error: 'Video not found' }, { status: 404 });
        }

        // Update featured
        data.Featured = foundVideo;

        // Write back updated file
        await fs.writeFile(filePath, JSON.stringify(data, null, 2), 'utf8');

        return NextResponse.json({
            success: true,
            Featured: data.Featured,
            TendingNow: data.TendingNow,
        });
    } catch (error) {
        console.error('Failed to update featured video:', error);
        return NextResponse.json(
            { error: 'Internal Server Error', details: String(error) },
            { status: 500 }
        );
    }
}
