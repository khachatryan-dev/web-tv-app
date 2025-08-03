import { useEffect, useState, useCallback } from 'react';
import { Video } from '@/types';

export function useFeaturedVideo(
    videos: Video[],
    defaultFeaturedVideo: Video | null,
    featuredId: string
) {
    const [featuredVideo, setFeaturedVideo] = useState<Video | null>(defaultFeaturedVideo);

    const resolveFeaturedVideo = useCallback(
        (id: string | null) => {
            if (!id) {
                setFeaturedVideo(defaultFeaturedVideo);
                return;
            }

            const matched = videos.find((v) => v.Id === id);
            setFeaturedVideo(matched || defaultFeaturedVideo);
        },
        [videos, defaultFeaturedVideo]
    );

    useEffect(() => {
        resolveFeaturedVideo(featuredId);
    }, [featuredId, resolveFeaturedVideo]);

    useEffect(() => {
        const handleStorage = (event: StorageEvent) => {
            if (event.key === 'featuredId') {
                resolveFeaturedVideo(event.newValue);
            }
        };

        window.addEventListener('storage', handleStorage);
        return () => window.removeEventListener('storage', handleStorage);
    }, [resolveFeaturedVideo]);

    return featuredVideo;
}
