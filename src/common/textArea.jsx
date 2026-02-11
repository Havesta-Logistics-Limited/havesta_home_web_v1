import { ErrorMessage, useField, Field } from "formik";
import { Box, Typography, styled } from "@mui/material";

const StyledFormGroup = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  marginBottom: "1rem",
});

const StyledInput = styled(Field)({
  display: "block",
  width: "100%",
  height: "10rem",
  padding: ".5rem",
  border: "1px solid grey",
  borderRadius: "15px",
  "&.is-invalid": {
    border: "1px solid red",
  },
});

const StyledErrorMessage = styled(ErrorMessage)({
  color: "red",
  marginTop: ".25rem",
});

const TextArea = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <StyledFormGroup>
      <Typography component="label" htmlFor={field.name} gutterBottom>
        {label}
      </Typography>
      <StyledInput
        {...field}
        {...props}
        as="textarea"
        className={meta.touched && meta.error ? "is-invalid" : ""}
        name={field.name}
        id={field.name}
      />
      {meta.touched && meta.error ? (
        <StyledErrorMessage name={field.name} component="div" />
      ) : null}
    </StyledFormGroup>
  );
};

export default TextArea;
