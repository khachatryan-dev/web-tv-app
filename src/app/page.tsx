import Layout from '@/components/Layout';
import FeaturedVideo from '@/features/featuredVideo/FeaturedVideo';
import TrendingCarousel from '@/features/trending/TrendingCarousel';
import {Video} from "@/types";

async function getVideos(featuredId?: string): Promise<{ Featured: Video | null; TendingNow: Video[] }> {
    if (featuredId) {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/set-featured`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id: featuredId}),
        });
        if (!res.ok) {
            throw new Error('Failed to fetch videos');
        }

        return  await res.json();
    } else {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/videos`, {
            cache: 'no-store',
        });
        if (!res.ok) {
            throw new Error('Failed to fetch videos');
        }

        return  await res.json();
    }
}

export default async function HomePage({ searchParams }: { searchParams: { featuredId?: string }}) {
  const {featuredId = ''} =  await searchParams;
    const {Featured, TendingNow} = await getVideos(featuredId);

  return (
      <Layout>
        <FeaturedVideo video={Featured} />
        <section className="mt-10">
          <h2 className="text-xl font-semibold mb-4">Trending Now</h2>
          <TrendingCarousel videos={TendingNow}  />
        </section>
      </Layout>
  );
}
