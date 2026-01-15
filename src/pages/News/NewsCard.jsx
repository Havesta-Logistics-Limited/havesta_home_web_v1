import { Stack, Box, styled, Typography, Button } from "@mui/material";

import { Link } from "react-router-dom";
import { colors } from "../../utils/globals";

const StyledAboutBox = styled(Box)({
  borderRadius: "25px",
  width: "100%",
  height: "250px",
  overflow: "hidden",
  flexShrink: 0,
  minWidth: "300px",
  maxWidth: "400px",
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

const NewsCard = ({ title, description, summary, image, link }) => {
  return (
    <Stack
      direction={["column", "row"]}
      padding={1}
      marginBottom={"2rem"}
      border={`5px solid ${colors.primary}`}
      borderRadius={"25px"}
      overflow="hidden"
    >
      <Box
        marginY={"1rem"}
        marginLeft={["0", "2rem"]}
        sx={{ order: ["1", "2"] }}
      >
        <StyledTextBox textAlign={["center", "left"]} paddingRight={[0, 5]}>
          <Typography
            mb
            fontWeight={700}
            fontSize={"1.2rem"}
            color={colors.primary}
            fontFamily={"Plus Jakarta Sans"}
          >
            {title}
          </Typography>
          <Typography
            fontSize={"0.8rem"}
            mb={3}
            fontFamily={"Plus Jakarta Sans"}
          >
            {description}
          </Typography>
          <Typography
            fontSize={"0.8rem"}
            mb={2}
            fontFamily={"Plus Jakarta Sans"}
          >
            {summary}
          </Typography>
          <Stack direction="row" alignItems="center">
            <Link to={link}>
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
          background: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
    </Stack>
  );
};

export default NewsCard;
