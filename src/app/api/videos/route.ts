import { NextResponse } from 'next/server';
import path from 'path';
import { promises as fs } from 'fs';
import {Video} from "@/types";

export async function GET() {
    try {
        const jsonDirectory = path.join(process.cwd(), 'src', 'data');
        const filePath = path.join(jsonDirectory, 'videos.json');
        const fileContents = await fs.readFile(filePath, 'utf8');
        const data: Video = JSON.parse(fileContents);
        return NextResponse.json(data);
    } catch (error) {
        console.error('Failed to read data:', error);
        return NextResponse.json({ error: 'Failed to load data', details: String(error) }, { status: 500 });
    }
}
