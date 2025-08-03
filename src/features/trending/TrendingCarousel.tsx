'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from "next/image";
import { useRouter } from 'next/navigation';
import {TrendingProps} from "@/features/trending/types";

const Trending: React.FC<TrendingProps> = ({ videos }: TrendingProps) => {
    const router = useRouter();
    const handleSelect =  (id: string) => {
        router.push(`/?featuredId=${id}`);
    }
    return (
        <section>
            <Swiper
                spaceBetween={16}
                slidesPerView={8}
                className="py-4 px-4"
                breakpoints={{
                    320: {
                        slidesPerView: 2,
                        spaceBetween: 8,
                    },
                    480: {
                        slidesPerView: 3,
                        spaceBetween: 12,
                    },
                    640: {
                        slidesPerView: 4,
                        spaceBetween: 16,
                    },
                    768: {
                        slidesPerView: 5,
                        spaceBetween: 16,
                    },
                    1024: {
                        slidesPerView: 6,
                        spaceBetween: 16,
                    },
                    1280: {
                        slidesPerView: 8,
                        spaceBetween: 16,
                    },
                }}
            >
                {videos.map((video) => (
                    <SwiperSlide
                        key={video.Id}
                        className="w-[150px] cursor-pointer"
                        onClick={() => handleSelect(video.Id)}
                    >
                        <div className="group">
                            <Image
                                width={200}
                                height={225}
                                priority
                                src={`${process.env.NEXT_PUBLIC_BASE_URL}${video.CoverImage}`}
                                alt={video.Title}
                                className="rounded-md object-cover w-full h-[225px] transition-transform group-hover:scale-105"
                                draggable={false}
                            />
                            <p className="mt-1 text-sm text-gray-700 truncate text-center">{video.Title}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>

    );
};

export default Trending;
