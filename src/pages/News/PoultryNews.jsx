import { Box, Container, Typography, styled } from "@mui/material";
import "swiper/css/effect-cards";
import "swiper/css";
import ReuseableHero from "../../common/ReuseableHero";
import Faq from "../../common/faq/Faq";
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

const PoultryNews = () => {
  return (
    <>
      <ReuseableHero
        text={"The Benefits of Owning a Poultry Farm in Nigeria"}
      />
      <Container>
        <StyledBox
          height={["40vh", "50vh"]}
          sx={{
            background: `url("https://res.cloudinary.com/dtc89xi2r/image/upload/v1719526343/Rectangle_610_24_hcoxfn.png")`,
            backgroundSize: ["cover", "100% 100%"],
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        <Box fontFamily={"Plus Jakarta Sans"} my={10}>
          <StyledTitle>Introduction</StyledTitle>
          <StyledText>
            Poultry farming is one of the most profitable and widely practiced
            agribusinesses in Nigeria and across Africa. With a rapidly growing
            population, increasing urbanization, and rising demand for
            affordable protein, poultry farming presents a strong opportunity
            for both smallholder and commercial farmers.
          </StyledText>

          <StyledTitle>1. Massive Demand Across Nigeria</StyledTitle>
          <StyledText>
            Chicken meat and eggs are staple food items in Nigerian households.
            From homes to restaurants, hotels, bakeries, and street food
            vendors, poultry products are consumed daily. This consistent demand
            ensures that poultry farmers always have a ready market for their
            produce, especially in urban centers like Lagos, Abuja, Ibadan, and
            Port Harcourt.
          </StyledText>

          <StyledTitle>2. Fast Cash Flow and Quick Returns</StyledTitle>
          <StyledText>
            One major advantage of poultry farming in Nigeria is the fast
            production cycle. Broiler chickens reach market size within 6–8
            weeks, allowing farmers to sell multiple batches in a year. Layer
            farming provides steady income through daily egg sales, making it
            ideal for farmers seeking consistent cash flow.
          </StyledText>

          <StyledTitle>3. Affordable Entry Point for Farmers</StyledTitle>
          <StyledText>
            Poultry farming does not require large land areas or heavy capital
            to start. Many Nigerian farmers begin on a small scale in their
            backyard or rented spaces and gradually expand as profits grow. This
            makes poultry farming accessible to youths, women, and first-time
            agripreneurs.
          </StyledText>

          <StyledTitle>4. Job Creation and Local Economic Growth</StyledTitle>
          <StyledText>
            The poultry value chain supports feed suppliers, transporters,
            veterinarians, processors, and market sellers. Owning a poultry farm
            contributes directly to employment generation and strengthens local
            economies.
          </StyledText>

          <StyledTitle>5. Waste Recycling and Crop Support</StyledTitle>
          <StyledText>
            Poultry droppings are widely used as organic fertilizer in Nigeria,
            supporting crop farming and reducing dependence on chemical
            fertilizers. This creates a sustainable farming ecosystem.
          </StyledText>

          <StyledTitle>Conclusion</StyledTitle>
          <StyledText>
            In summary, poultry farming in Nigeria offers fast returns, strong
            demand, scalability, and long-term profitability—making it one of
            the most reliable agribusiness ventures in Africa. Whether you're a
            new farmer or looking to diversify your agricultural portfolio,
            poultry farming presents an excellent opportunity for sustainable
            income generation.
          </StyledText>
        </Box>
      </Container>
      <PageFooter />{" "}
    </>
  );
};

export default PoultryNews;
