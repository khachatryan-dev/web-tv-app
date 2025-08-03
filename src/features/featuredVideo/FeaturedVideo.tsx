'use client';
import { FaRegCirclePlay, FaCircleStop } from "react-icons/fa6";
import { useState } from 'react';
import { Video } from '@/types';
import Image from 'next/image';

function extractYoutubeId(url: string): string | null {
    const regex = /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
}

export default function FeaturedVideo({ video }: { video: Video | null }) {
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlay = () => setIsPlaying(true);
    const handleStop = () => setIsPlaying(false);

    if (!video) return null;

    const youtubeId = extractYoutubeId(video.VideoUrl || '');

    return (
        <div className="relative h-[500px] rounded-xl overflow-hidden shadow-xl">
            {!isPlaying && (
                <Image
                    width={500}
                    height={500}
                    priority
                    src={`${process.env.NEXT_PUBLIC_BASE_URL}${video.CoverImage}`}
                    alt={video.Title}
                    className="absolute top-0 left-0 w-full h-full object-cover"
                />
            )}

            {isPlaying && youtubeId && (
                <iframe
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&mute=1&loop=1&playlist=${youtubeId}`}
                    title={video.Title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            )}

            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />

            <div className="relative z-20 p-6 flex flex-col justify-end h-full max-w-4xl">
                <h1 className="text-3xl font-bold text-white">{video.Title}</h1>
                <p className="uppercase text-sm text-gray-300">{video.Category}</p>
                <p className="text-xs text-gray-400 mb-1">
                    {video.Year} • {video.MpaRating} • {video.Duration}
                </p>
                <p className="text-sm text-gray-200 max-w-xl mb-4 line-clamp-3">{video.Description}</p>

                <div className="flex gap-4">
                    {!isPlaying ? (
                        <button
                            onClick={handlePlay}
                            aria-label="Play video"
                            className="flex items-center justify-center gap-2 bg-white text-black font-semibold px-5 py-2 rounded hover:bg-gray-300 transition"
                            tabIndex={0}
                        >
                            <FaRegCirclePlay /> Play
                        </button>
                    ) : (
                        <button
                            onClick={handleStop}
                            aria-label="Stop video"
                            className="flex items-center justify-center gap-2 bg-red-600 text-white font-semibold px-5 py-2 rounded hover:bg-red-700 transition"
                            tabIndex={0}
                        >
                            <FaCircleStop /> Stop
                        </button>
                    )}
                    <button
                        className="bg-white/20 text-white font-medium px-5 py-2 rounded hover:bg-white/30 transition"
                        tabIndex={0}
                        aria-label="More video info"
                    >
                        More Info
                    </button>
                </div>
            </div>
        </div>
    );
}
