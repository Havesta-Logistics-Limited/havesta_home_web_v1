import useFaQ from "./useFaQ";
import FaqMain from "./faq-main/FaqMain";

export default function Faq() {
  useFaQ();
  return (
    <div className="flex justify-center px-4">
      <FaqMain />
    </div>
  );
}
