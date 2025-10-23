import useAboutHavestaChunk from "./useAboutHavestaChunk";

import { IMG_CEO_NOEL } from "../../../../assets/images";

import ChevronRightIcon from "@mui/icons-material/ChevronRight";

export default function AboutHavestaChunk() {
  const h = useAboutHavestaChunk();
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:p-24 ">
      <div className="p-4 flex flex-col items-center text-center">
        <img src={IMG_CEO_NOEL} alt="ceo-image" className="w-full lg:w-2/3" />
        <p className="pt-2 font-bold font-primary">Noel Amobeda</p>
        <p className="text-xs text-primary font-bold tracking-wide">
          Founder & CEO at Havesta
        </p>
        <div className="w-full mt-12 lg:w-2/3">
          <h5 className="p-4 font-bold text-lg uppercase border-l-4 border-harvestaLightGreen text-left">
            Why choose Havesta?
          </h5>
          <ul className="pl-8 text-left">
            {h.aboutListItems.map((item, index) => (
              <li
                key={index}
                className="p-2 font-primary flex items-start md:leading-relaxed"
              >
                <ChevronRightIcon color="success" />
                <div className="ml-2">
                  <span className="font-bold mr-2">{item.title}:</span>
                  <span>{item.content}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="text-left">
        {h.aboutItems.map((items, index) => (
          <div key={index} className="mt-6">
            <h5
              className={`grid text-harvestaDarkGreen p-4 font-bold text-sm uppercase border-harvestaLightGreen 
                  lg:text-lg
                  ${
                    items.position === "left"
                      ? "justify-items-start border-l-4"
                      : "justify-items-end border-r-4"
                  }`}
            >
              {items.title}
            </h5>
            <p className="p-2 text-left font-primary lg:text-base md:leading-loose">
              {items.content}
            </p>
          </div>
        ))}
        <div className="font-bold font-primary mt-4 px-4">
          <p className="ml-[-4px]">
            Thank you for choosing Havesta. Together, we can make fresh, local
            produce a part of everyone’s daily life. Join us in our mission to
            create healthier, happier communities, one delivery at a time
          </p>
        </div>
      </div>
    </div>
  );
}
