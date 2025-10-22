import ReuseableHero from "../../common/ReuseableHero";
import Faq from "../../common/faq/Faq";
import Latest from "./latest";
import useNewsTemplate from "./useNewsTemplate";

export default function NewsTemplate() {
  const h = useNewsTemplate();
  return (
    <>
      <ReuseableHero
        text={
          "get the latest updates and deeper shopping experience from havesta "
        }
      />

      <div className="full mb-[250px]">
        <Latest />
      </div>
      <Faq />
    </>
  );
}
