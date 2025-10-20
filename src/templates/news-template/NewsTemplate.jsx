import ReuseableHero from "../../common/ReuseableHero";
import Faq from "../home-templates/chunks/faq/Faq";
import Latest from "./latest";
import useNewsTemplate from "./useNewsTemplate";

export default function NewsTemplate() {
  const h = useNewsTemplate();
  return (
    <>
      <ReuseableHero
        text={
          "get the latest updates and deeper shopping experience from harvesta "
        }
      />

      <div className="full mb-[250px]">
        <Latest />
      </div>
      <Faq />
    </>
  );
}
