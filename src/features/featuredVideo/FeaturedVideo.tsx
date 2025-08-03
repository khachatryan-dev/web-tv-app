'use client';
import { FaRegCirclePlay, FaCircleStop } from "react-icons/fa6";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useFeaturedVideo } from "@/hooks/useFeaturedVideo";
import {FeaturedVideoProps} from "@/features/featuredVideo/types";

function extractYoutubeId(url: string): string | null {
    const regex = /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
}



export default function FeaturedVideo({ video, tendingNow, featuredId }: FeaturedVideoProps) {
    const [isPlaying, setIsPlaying] = useState(false);
    const featuredVideo = useFeaturedVideo(tendingNow, video, featuredId);

    const youtubeId =  extractYoutubeId(featuredVideo?.VideoUrl || '')

    useEffect(() => {
        return () => setIsPlaying(false);
    }, []);

    const handlePlay = () => {
        setIsPlaying(true);
    };

    const handleStop = () => {
        setIsPlaying(false);
    };

    if (!featuredVideo) {
        return (
            <div className="relative h-[500px] rounded-xl overflow-hidden shadow-xl bg-gray-800 flex items-center justify-center">
                <p className="text-white">Loading featured video...</p>
            </div>
        );
    }

    return (
        <div className="relative h-[500px] rounded-xl overflow-hidden shadow-xl">
            {/* Background Image (shown when not playing) */}
            {!isPlaying && (
                <Image
                    width={1920}
                    height={1080}
                    priority
                    src={`${process.env.NEXT_PUBLIC_BASE_URL}${featuredVideo.CoverImage}`}
                    alt={featuredVideo.Title}
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    onError={(e) => {
                        // Fallback image handling
                        (e.target as HTMLImageElement).src = '/default-video-cover.jpg';
                    }}
                />
            )}

            {isPlaying && youtubeId && (
                <div className="absolute top-0 left-0 w-full h-full">
                    <iframe
                        className="w-full h-full object-cover"
                        src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&mute=1&loop=1&playlist=${youtubeId}`}
                        title={featuredVideo.Title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        loading="eager"
                    />
                </div>
            )}

            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />

            <div className="relative z-20 p-6 flex flex-col justify-end h-full max-w-4xl">
                <h1 className="text-3xl font-bold text-white">{featuredVideo.Title}</h1>
                <p className="uppercase text-sm text-gray-300">{featuredVideo.Category}</p>
                <p className="text-xs text-gray-400 mb-1">
                    {featuredVideo.Year} • {featuredVideo.MpaRating} • {featuredVideo.Duration}
                </p>
                <p className="text-sm text-gray-200 max-w-xl mb-4 line-clamp-3">{featuredVideo.Description}</p>

                <div className="flex gap-4">
                    {!isPlaying ? (
                        <button
                            onClick={handlePlay}
                            aria-label={`Play ${featuredVideo.Title}`}
                            className="flex items-center justify-center gap-2 bg-white text-black font-semibold px-5 py-2 rounded hover:bg-gray-300 transition focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                        >
                            <FaRegCirclePlay className="text-lg" /> Play
                        </button>
                    ) : (
                        <button
                            onClick={handleStop}
                            aria-label={`Stop ${featuredVideo.Title}`}
                            className="flex items-center justify-center gap-2 bg-red-600 text-white font-semibold px-5 py-2 rounded hover:bg-red-700 transition focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-800"
                        >
                            <FaCircleStop className="text-lg" /> Stop
                        </button>
                    )}
                    <button
                        className="bg-white/20 text-white font-medium px-5 py-2 rounded hover:bg-white/30 transition focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                        aria-label={`More info about ${featuredVideo.Title}`}
                    >
                        More Info
                    </button>
                </div>
            </div>
        </div>
    );
}