import { Box, Container, Typography, styled } from "@mui/material";
import { TermsOfuse } from "../config/termsOfUse.config";
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

const TermsOfUse = () => {
  return (
    <>
      <ReuseableHero text={"TERMS OF USE"} />
      <div className="full mb-[250px]">
        <Container>
          {TermsOfuse.map((policy, i) => (
            <Box fontFamily={"Plus Jakarta Sans"} my={5} key={i}>
              <StyledTitle>
                {i + 1} {policy.title}
              </StyledTitle>
              {policy.paragraphs.map((subPolicy, i) => (
                <StyledText key={i}>{subPolicy.text}</StyledText>
              ))}
            </Box>
          ))}
        </Container>
      </div>
      <Faq />
    </>
  );
};
export default TermsOfUse;
