import useFaQ from "./useFaQ";
import FaqMain from "./faq-main/FaqMain";
import FaqMainSkeleton from "./faq-main/FaqMainSkeleton";
import { Suspense } from "react";

export default function Faq() {
  useFaQ();
  return (
    <div className="flex justify-center px-4">
      <Suspense fallback={<FaqMainSkeleton />}>
        <FaqMain />
      </Suspense>
    </div>
  );
}
