import {
  Stack,
  Box,
  styled,
  Typography,
  Container,
  Button,
} from "@mui/material";
import Heading from "./Heading";
import ArticlesGallery from "./ArticlesGallery";
import { colors } from "../../utils/globals";
import { Link } from "react-router-dom";

const StyledAboutBox = styled(Box)({
  borderRadius: "25px",
  width: "100%",
  height: "250px",
});

const StyledTextBox = styled(Box)({
  lineHeight: "1rem",
  color: "black",
  "@media screen and (max-width: 1200px)": {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
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
const Latest = () => {
  return (
    <>
      <Container maxWidth={"lg"}>
        <Box marginY={8}>
          <Heading title="Latest News" Talign="left" x="0" PX="0" />
          <Stack
            direction={["column", "row"]}
            padding={1}
            marginBottom={"2rem"}
            border={`5px solid ${colors.primary}`}
            borderRadius={"25px"}
          >
            <Box
              marginY={"1rem"}
              marginLeft={["0", "2rem"]}
              sx={{ order: ["1", "2"] }}
            >
              <StyledTextBox
                textAlign={["center", "left"]}
                paddingRight={[0, 5]}
              >
                <Typography
                  mb
                  fontWeight={700}
                  fontSize={"1.2rem"}
                  color={colors.primary}
                  fontFamily={"Plus Jakarta Sans"}
                >
                  A Bumper Harvest
                </Typography>
                <Typography
                  fontSize={"0.8rem"}
                  mb={3}
                  fontFamily={"Plus Jakarta Sans"}
                >
                  Our customers are at the heart of everything we do. We are
                  dedicated to providing exceptional service, ensuring that
                  every delivery is timely and every interaction is positive.
                </Typography>
                <Typography
                  fontSize={"0.8rem"}
                  mb={2}
                  fontFamily={"Plus Jakarta Sans"}
                >
                  Your satisfaction is our top priority, and we continuously
                  seek to improve our services to meet your needs.
                </Typography>
                <Stack direction="row" alignItems="center">
                  <Link to={`/news/topnews`}>
                    <Button
                      variant="contained"
                      sx={{
                        fontFamily: "Plus Jakarta Sans",
                        backgroundColor: colors.primary,
                        "&:hover": {
                          backgroundColor: colors.primary,
                        },
                      }}
                    >
                      Read more
                    </Button>
                  </Link>
                </Stack>
              </StyledTextBox>
            </Box>
            <StyledAboutBox
              sx={{
                order: ["2", "1"],
                background: `url(https://res.cloudinary.com/dtc89xi2r/image/upload/v1719331576/Rectangle_3854_qrepi6.png)`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
              }}
            />
          </Stack>
        </Box>

        <Box marginY={8}>
          <Heading title="Articles & News" Talign="left" x="0" PX="0" />
          <ArticlesGallery data={data} />
        </Box>
      </Container>
    </>
  );
};
export default Latest;
