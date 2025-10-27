import { Box, Container, Typography, styled } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import "swiper/css/effect-cards";
import "swiper/css";
import PagesHero from "../templates/news-template/pagesHero";
import ReuseableHero from "../common/ReuseableHero";
import Faq from "../common/faq/Faq";

const StyledText = styled(Typography)({
  fontSize: "1rem",
  marginTop: "2rem",
  marginBottom: "2rem",
});
const StyledTitle = styled(Typography)({
  fontWeight: 700,
  fontSize: "1.2rem",
  marginBottom: "1rem",
});
const StyledBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "15px",
  marginTop: "3rem",
});
const data = [
  {
    img: "https://res.cloudinary.com/dtc89xi2r/image/upload/v1719526343/Rectangle_610_24_hcoxfn.png",
    des: "Poultry Market",
    paragraph:
      "At Havesta, we prioritize delivering the freshest produce directly from local farms to your doorstep. We ensure that every item meets our high standards ",
  },
  {
    img: "https://res.cloudinary.com/dtc89xi2r/image/upload/v1719526338/Rectangle_610_25_p2mduc.png",
    des: "Freshness ",
    paragraph:
      "At Havesta, we prioritize delivering the freshest produce directly from local farms to your doorstep. We ensure that every item meets our high standards ",
  },

  {
    img: "https://res.cloudinary.com/dtc89xi2r/image/upload/v1719526343/Rectangle_610_27_i6pya0.png",
    des: "How I eat healthy meals ",
    paragraph:
      "At Havesta, we prioritize delivering the freshest produce directly from local farms to your doorstep. We ensure that every item meets our high standards ",
  },
  {
    img: "https://res.cloudinary.com/dtc89xi2r/image/upload/v1719526333/Rectangle_610_30_zk5jbh.png",
    des: "How To Grow Potatoes ",
    paragraph:
      "At Havesta, we prioritize delivering the freshest produce directly from local farms to your doorstep. We ensure that every item meets our high standards ",
  },
  {
    img: "https://res.cloudinary.com/dtc89xi2r/image/upload/v1719526332/Rectangle_610_28_byrgbn.png",
    des: "Havesta: Expansion Plans",
    paragraph:
      "At Havesta, we prioritize delivering the freshest produce directly from local farms to your doorstep. We ensure that every item meets our high standards ",
  },
  {
    img: "https://res.cloudinary.com/dtc89xi2r/image/upload/v1719526336/Rectangle_610_26_tulrf7.png",
    des: "How To Grow Potatoes ",
    paragraph:
      "At Havesta, we prioritize delivering the freshest produce directly from local farms to your doorstep. We ensure that every item meets our high standards ",
  },
];

const SingleNews = () => {
  return (
    <>
      <ReuseableHero
        text={
          "A Bumper Harvest: How Havesta Empowered a Female Maize Farmer to Achieve Record Profits"
        }
      />

      <Container>
        <StyledBox
          height={["40vh", "50vh"]}
          sx={{
            background: `url( "https://res.cloudinary.com/dtc89xi2r/image/upload/v1719331576/Rectangle_3854_qrepi6.png")`,
            backgroundSize: ["cover", "100% 100%"],
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        <Box fontFamily={"Plus Jakarta Sans"} my={10}>
          <StyledTitle>Introduction</StyledTitle>
          <StyledText>
            In the lush fields of the heartland, where the sun kisses the earth
            with a golden glow, lives a remarkable woman whose dedication and
            hard work have turned a humble maize farm into a thriving business.
            Meet Maria, a resilient and passionate maize farmer who has seen an
            unprecedented profitable harvest this farming season. Her journey,
            filled with challenges and triumphs, has been profoundly transformed
            by Havesta, our innovative logistics company. Through our online
            shopping platform, Maria has not only driven her sales to new
            heights but also inspired countless others in her community.
          </StyledText>
          <StyledTitle>Maria’s Journey: From Struggle to Success</StyledTitle>
          <StyledText>
            Maria’s journey into farming began several years ago. Growing up in
            a rural area, she was familiar with the rhythms of agricultural
            life. However, it wasn't until a few years ago that she decided to
            take up maize farming seriously. Determined to provide for her
            family and create a sustainable source of income, Maria invested her
            savings into a small plot of land. Despite her dedication, the path
            to success was fraught with challenges. Unpredictable weather,
            pests, and market fluctuations made it difficult for her to achieve
            consistent profits.
          </StyledText>
          <StyledTitle>The Turning Point</StyledTitle>
          <StyledText>
            The turning point in Maria’s farming career came when she discovered
            Havesta. Our logistics company, focused on making freshly farm
            produce available to all customers within their localities, provided
            her with a lifeline. With Havesta’s user-friendly online shopping
            platform, Maria could now reach a broader audience and sell her
            maize directly to consumers. This innovation not only cut out the
            middlemen, who often took a significant portion of her profits, but
            also ensured that she received fair prices for her hard-earned
            produce.
          </StyledText>
          <StyledTitle>
            Havesta’s Impact: Driving Sales and Empowering Farmers
          </StyledTitle>
          <StyledText>
            Havesta’s platform revolutionized the way Maria conducted her
            business. Here’s how we made a difference:
          </StyledText>
          <StyledTitle>Increased Market Reach:</StyledTitle>
          <StyledText>
            Connecting with Consumers: Through our online platform, Maria could
            showcase her maize to a vast customer base. Customers from various
            localities could easily browse and purchase her produce with just a
            few clicks.
          </StyledText>

          <StyledText>
            Eliminating Middlemen: By connecting directly with consumers, Maria
            could sell her maize at competitive prices, ensuring she received
            the full benefit of her labor.
          </StyledText>

          <StyledTitle>Enhanced Sales and Profitability:</StyledTitle>
          <StyledText>
            Higher Demand: The convenience of online shopping attracted more
            customers, leading to higher sales volumes. With a steady stream of
            orders, Maria’s business flourished.
          </StyledText>
          <StyledText>
            Better Pricing: Havesta’s transparent pricing model ensured that
            Maria received fair compensation for her produce, significantly
            improving her profit margins.
          </StyledText>
          <StyledTitle>Efficient Logistics:</StyledTitle>
          <StyledText>
            Reliable Delivery: Havesta’s efficient logistics network ensured
            that Maria’s maize reached customers promptly and in excellent
            condition. This reliability built trust with consumers and
            encouraged repeat business.
          </StyledText>
          <StyledText>
            Reduced Waste: With a streamlined supply chain, there was minimal
            waste, ensuring that more of Maria’s produce reached the market,
            further boosting her income.
          </StyledText>
          <StyledTitle>Support and Training:</StyledTitle>
          <StyledText>
            Agricultural Training: Havesta provided Maria with access to
            agricultural experts who offered valuable advice on best farming
            practices, pest control, and crop management. This support helped
            Maria improve her yields and overall farm productivity.
          </StyledText>
          <StyledText>
            Business Skills: Our platform also offered training in business
            management and financial planning, equipping Maria with the skills
            needed to run a successful enterprise.
          </StyledText>
          <StyledTitle> A Season of Prosperity</StyledTitle>
          <StyledText>
            This farming season has been nothing short of spectacular for Maria.
            With Havesta’s support, she achieved a record-breaking harvest. Her
            fields, once modest, now flourished with an abundance of maize. The
            increase in production was matched by a surge in sales, as more and
            more customers discovered the convenience of purchasing fresh
            produce online.
          </StyledText>
          <StyledText>
            Maria’s story is a testament to the power of innovation and the
            importance of supporting local farmers. By leveraging Havesta’s
            platform, she transformed her small farm into a profitable venture.
            Her success not only improved her family’s living standards but also
            inspired other women in her community to pursue their agricultural
            dreams.
          </StyledText>
          <StyledTitle>Building a Community of Empowered Farmers</StyledTitle>
          <StyledText>
            At Havesta, we believe in the power of community. Maria’s success is
            just one example of how our platform is making a difference. By
            empowering local farmers, we are fostering a network of sustainable
            agricultural businesses. Our commitment to freshness, convenience,
            community support, sustainability, and customer satisfaction drives
            us to continually improve our services and support more farmers like
            Maria.
          </StyledText>
          <StyledTitle>Conclusion</StyledTitle>
          <StyledText>
            Maria’s journey from a struggling maize farmer to a prosperous
            businesswoman is an inspiring story of resilience, hard work, and
            the transformative power of technology. With Havesta’s online
            shopping platform, Maria found a way to overcome the challenges that
            once hindered her progress. Her profitable harvest this season is a
            beacon of hope and a testament to what can be achieved when farmers
            are given the tools and support they need.
          </StyledText>

          <StyledText>
            As we continue to expand our reach and enhance our services, Havesta
            remains dedicated to empowering farmers, driving sales, and making
            fresh, local produce accessible to all. Together, we can build a
            future where every farmer thrives, and every customer enjoys the
            best that our fields have to offer. Join us in celebrating Maria’s
            success and be part of a community that values quality,
            sustainability, and growth.
          </StyledText>
        </Box>
      </Container>

      <Box marginTop={8} mb={"250px"}>
        <Container maxWidth="xl">
          <h3 className="flex justify-center font-bold text-4xl mb-5">
            More News
          </h3>
          <Swiper
            grabCursor={true}
            effect={"slide"}
            centeredSlides={true}
            autoplay={{
              disableOnInteraction: false,
              delay: 0,
            }}
            speed={5000}
            spaceBetween={50}
            pagination={{ clickable: true }}
            loop={true}
            modules={[EffectCoverflow, Pagination, Autoplay]}
            breakpoints={{
              // Large screens
              1024: {
                slidesPerView: 3,
                effect: "slide",
              },
              // Smaller screens
              0: {
                slidesPerView: 1,
                effect: "slide",
              },
            }}
          >
            {data.map((item, index) => (
              <SwiperSlide key={index}>
                <div
                  className="bg-primary rounded-xl
              border-primary overflow-hidden hover:bg-harvestaLightGreen hover:border-primary text-white my-10 h-[480px]
              transition-all hover:shadow-lg"
                >
                  <img
                    src={item.img}
                    alt=""
                    className="w-full h-40 sm:h-48 object-cover"
                  />
                  <div className="m-10">
                    <span className="font-bold text-[18px] flex justify-center align-center p-3 font-primary">
                      {item.des}
                    </span>
                    <span className="block text-md font-primary text-center">
                      {item.paragraph}
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </Container>
      </Box>
      <Faq />
    </>
  );
};

export default SingleNews;
