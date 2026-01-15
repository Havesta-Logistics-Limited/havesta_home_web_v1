import { Box, Container, Typography, styled } from "@mui/material";
import "swiper/css/effect-cards";
import "swiper/css";
import ReuseableHero from "../../common/ReuseableHero";
import Faq from "../../common/faq/Faq";
import { newsArticles } from "../../data/newsData";

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

const GingerNews = () => {
  const gingerArticle = newsArticles.find(
    (article) => article.id === "ginger-farming"
  );

  return (
    <>
      <ReuseableHero text={gingerArticle.title} />

      <Container>
        <StyledBox
          height={["40vh", "50vh"]}
          sx={{
            background: `url("${gingerArticle.image}")`,
            backgroundSize: ["cover", "100% 100%"],
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        <Box fontFamily={"Plus Jakarta Sans"} my={10}>
          <StyledTitle>Introduction</StyledTitle>
          <StyledText>
            Ginger farming is a high-value agribusiness opportunity in Nigeria,
            particularly in states like Kaduna, Nasarawa, Gombe, and Benue.
            Nigeria is one of Africa's largest ginger producers, with strong
            local and export demand.
          </StyledText>

          <StyledTitle>
            1. Strong Export and Foreign Exchange Potential
          </StyledTitle>
          <StyledText>
            Nigerian ginger is highly valued in international markets due to its
            strong aroma and quality. Ginger exports generate foreign exchange
            and offer farmers access to global buyers in Europe, Asia, and the
            Middle East.
          </StyledText>

          <StyledTitle>2. High Profit per Hectare</StyledTitle>
          <StyledText>
            Compared to staple crops like maize or cassava, ginger delivers
            higher returns per hectare. With good farming practices, ginger
            farmers can achieve significant profits even on small plots of land.
          </StyledText>

          <StyledTitle>3. Wide Industrial and Medicinal Uses</StyledTitle>
          <StyledText>
            Ginger is used extensively in Nigerian cooking, herbal medicine,
            pharmaceuticals, beverages, and cosmetics. This wide application
            ensures stable and long-term demand.
          </StyledText>

          <StyledTitle>4. Climate Advantage in Nigeria</StyledTitle>
          <StyledText>
            Nigeria's climate and soil conditions are ideal for ginger
            cultivation. Ginger typically matures within 8–10 months, making it
            suitable for annual farming cycles.
          </StyledText>

          <StyledTitle>
            5. Income Diversification and Rural Development
          </StyledTitle>
          <StyledText>
            Ginger farming helps rural farmers diversify income, reduce poverty,
            and strengthen agricultural exports. It also supports
            agro-processing and value-added industries.
          </StyledText>

          <StyledTitle>Conclusion</StyledTitle>
          <StyledText>
            In conclusion, ginger farming in Nigeria offers farmers a powerful
            opportunity to tap into export markets, earn higher profits, and
            contribute to Africa's agricultural growth. With proper cultivation
            techniques and market access, ginger farming can transform rural
            livelihoods.
          </StyledText>
        </Box>
      </Container>

      <Faq />
    </>
  );
};

export default GingerNews;
