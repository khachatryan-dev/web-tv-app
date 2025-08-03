import Layout from '@/components/Layout';
import FeaturedVideo from '@/features/featuredVideo/FeaturedVideo';
import TrendingCarousel from '@/features/trending/TrendingCarousel';
import {Video} from "@/types";

async function getVideos(): Promise<{ Featured: Video | null; TendingNow: Video[] }> {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/videos`, {
            cache: 'no-store',
        });
        if (!res.ok) {
            throw new Error('Failed to fetch videos');
        }

        return await res.json();
}

export default async function HomePage({searchParams}: { searchParams: Promise<{ featuredId?: string }>; }) {
    const {featuredId = ""} = await searchParams;
    const initialData = await getVideos();
    const Featured = featuredId ? initialData.TendingNow.find(v => v.Id === featuredId) || initialData.Featured : initialData.Featured
    return (
        <Layout>
            <FeaturedVideo video={Featured} tendingNow={initialData.TendingNow} featuredId={featuredId}/>
            <section className="mt-10">
                <h2 className="text-xl font-semibold mb-4">Trending Now</h2>
                <TrendingCarousel videos={initialData.TendingNow}/>
            </section>
        </Layout>
    );
}
