import { lazy, Suspense } from "react";
import ReuseableHero from "../../common/ReuseableHero";
import Loader from "../../common/Loader.jsx";
import useNews from "./useNewsTemplate";

const Latest = lazy(() => import("./latest"));

export default function News() {
  useNews();
  return (
    <>
      <ReuseableHero
        text={
          "Get the latest updates and deeper shopping experience from havesta "
        }
      />

      <div className="full">
        <Suspense fallback={<Loader />}>
          <Latest />
        </Suspense>
      </div>
    </>
  );
}
