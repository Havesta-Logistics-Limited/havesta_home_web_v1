import React from "react";
import TextArea from "../../../../common/textArea";
import { Formik } from "formik";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { Stack, Box, styled, Typography, Button } from "@mui/material";
import TextInput from "../../../../common/textInput";

export default function ContactFormChunk() {
  const StyledTextInput = styled(TextInput)({
    width: "100%",
  });
  return (
    <form>
      <Stack direction={["column", "row"]} justifyContent="start">
        <Box
          width={"80%"}
          mr={2}
          sx={{
            marginBottom: {
              xs: 2,
            },
          }}
        >
          <StyledTextInput
            name="first_name"
            label={"First Name"}
            value={"name"}
          />
        </Box>
        <Box width={"80%"}>
          <StyledTextInput
            name="last_name"
            label={"Last Name"}
            value={"name"}
          />
        </Box>
      </Stack>
      <Stack direction={["column", "row"]} justifyContent="start" mt={2}>
        <Box
          width={"80%"}
          mr={2}
          sx={{
            marginBottom: {
              xs: 2,
            },
          }}
        >
          <StyledTextInput name="first_name" label={"Email"} value={"name"} />
        </Box>
        <Box width={"80%"}>
          <StyledTextInput
            name="last_name"
            label={"Phone Number"}
            value={"name"}
          />
        </Box>
      </Stack>
      <Box my={5}>
        <Typography fontWeight={600}>Select Subject</Typography>
        <FormControl>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            sx={{
              flexDirection: {
                xs: "column",
                sm: "row",
              },
            }}
          >
            <FormControlLabel
              value="deliveries"
              control={
                <Radio
                  sx={{
                    color: "green",
                    "&.Mui-checked": { color: "green" },
                  }}
                />
              }
              label="Deliveries"
            />
            <FormControlLabel
              value="product"
              control={
                <Radio
                  sx={{
                    color: "green",
                    "&.Mui-checked": { color: "green" },
                  }}
                />
              }
              label="Product"
            />
            <FormControlLabel
              value="vendors/riders"
              control={
                <Radio
                  sx={{
                    color: "green",
                    "&.Mui-checked": { color: "green" },
                  }}
                />
              }
              label="Vendors/Riders"
            />
            <FormControlLabel
              value="general_inquiry"
              control={
                <Radio
                  sx={{
                    color: "green",
                    "&.Mui-checked": { color: "green" },
                  }}
                />
              }
              label="General"
            />
          </RadioGroup>
        </FormControl>
      </Box>
      <Formik
        initialValues={{ message: "" }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Typography fontWeight={600}>Message</Typography>
            <TextArea name="message" placeholder={"write your message"} />
          </form>
        )}
      </Formik>
    </form>
  );
}
