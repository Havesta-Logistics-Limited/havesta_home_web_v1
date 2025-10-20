import React from "react";
import { Typography, Box } from "@mui/material";

const Heading = ({
  title,
  des,
  x = "10rem",
  PX = "5rem",
  Tcolor = "black",
  Dcolor = "black",
  fontS = "1.5rem",
  Talign = "center",
}) => {
  return (
    <>
      <Box mb textAlign={Talign} paddingX={["0rem", x]}>
        <Typography
          mb
          variant="h1"
          fontSize={fontS}
          color={Tcolor}
          paddingX={["0rem", PX]}
          fontWeight={700}
        >
          {title}
        </Typography>
        {des && <Typography color={Dcolor}> {des}</Typography>}
      </Box>
    </>
  );
};

export default Heading;
