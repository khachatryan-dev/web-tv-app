import {Video} from "@/types";

export type FeaturedVideoProps = {
    video: Video | null;
    tendingNow: Video[];
    featuredId: string;
};