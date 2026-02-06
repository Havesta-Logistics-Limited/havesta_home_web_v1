import SlidingNews from "../../../../common/sliding-news/SlidingNews";
import SlidingNewsSkeleton from "../../../../common/sliding-news/SlidingNewsSkeleton";
import { Suspense } from "react";

export default function LatestNews() {
  return (
    <div className="px-4 sm:px-8 md:px-20 lg:px-32 font-primary pb-16 sm:pb-24 md:pb-20 lg:pb-10 pt-8 md:pt-12">
      <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-8 text-center">
        Latest News
      </h1>
      <Suspense fallback={<SlidingNewsSkeleton />}>
        <SlidingNews />
      </Suspense>
    </div>
  );
}
