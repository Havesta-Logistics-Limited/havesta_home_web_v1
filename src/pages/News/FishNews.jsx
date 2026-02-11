import { Box, Container, Typography, styled } from "@mui/material";
import "swiper/css/effect-cards";
import "swiper/css";
import ReuseableHero from "../../common/ReuseableHero";
import Faq from "../../common/faq/Faq";
import { newsArticles } from "../../data/newsData";
import PageFooter from "../../common/PageFooter";

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

const FishNews = () => {
  const fishArticle = newsArticles.find(
    (article) => article.id === "fish-farming",
  );

  return (
    <>
      <ReuseableHero text={fishArticle.title} />

      <Container>
        <StyledBox
          height={["40vh", "50vh"]}
          sx={{
            background: `url("${fishArticle.image}")`,
            backgroundSize: ["cover", "100% 100%"],
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        <Box fontFamily={"Plus Jakarta Sans"} my={10}>
          <StyledTitle>Introduction</StyledTitle>
          <StyledText>
            Fish farming, also known as aquaculture, has become a critical
            solution to Nigeria's growing demand for fish. With declining wild
            fish supply and high consumption rates, fish farming presents a
            lucrative and sustainable agribusiness opportunity.
          </StyledText>

          <StyledTitle>1. Huge Fish Consumption Gap</StyledTitle>
          <StyledText>
            Nigeria is one of the largest consumers of fish in Africa, yet local
            production cannot meet demand. This gap forces heavy fish
            importation, creating a major opportunity for local fish farmers to
            supply fresh, affordable fish to the market.
          </StyledText>

          <StyledTitle>2. High Market Value and Fast Sales</StyledTitle>
          <StyledText>
            Catfish and tilapia are among the most popular fish species in
            Nigeria. They sell quickly in local markets, restaurants, hotels,
            and event catering. Fish farmers rarely struggle to find buyers,
            especially when producing healthy, market-sized fish.
          </StyledText>

          <StyledTitle>3. Flexible Farming Systems</StyledTitle>
          <StyledText>
            Fish farming can be practiced using earthen ponds, concrete tanks,
            plastic tanks, or tarpaulin ponds. This flexibility allows Nigerians
            to farm fish even in urban or semi-urban areas with limited space.
          </StyledText>

          <StyledTitle>4. Short Growth Cycle and High Yield</StyledTitle>
          <StyledText>
            Most fish species reach market size within 4–6 months, allowing
            farmers to harvest multiple times a year. With proper feeding and
            water management, fish farming offers high yield per square meter.
          </StyledText>

          <StyledTitle>5. Nutrition, Jobs, and Sustainability</StyledTitle>
          <StyledText>
            Fish provides affordable protein and essential nutrients for
            Nigerians. Fish farming also creates jobs while reducing pressure on
            overfished rivers and oceans.
          </StyledText>

          <StyledTitle>Conclusion</StyledTitle>
          <StyledText>
            Overall, fish farming is one of the smartest agribusiness
            investments in Nigeria, combining profitability, food security, and
            sustainability. Whether you're looking to start small or scale up,
            fish farming offers excellent returns with proper management.
          </StyledText>
        </Box>
      </Container>

      <PageFooter />
    </>
  );
};

export default FishNews;
