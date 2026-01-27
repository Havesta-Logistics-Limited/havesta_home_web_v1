import ReuseableHero from "../../common/ReuseableHero";
import Latest from "./latest";
import useNews from "./useNewsTemplate";

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
        <Latest />
      </div>
    </>
  );
}
