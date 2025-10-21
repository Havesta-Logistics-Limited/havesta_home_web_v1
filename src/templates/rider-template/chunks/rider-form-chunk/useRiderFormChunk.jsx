import { useState } from "react";
export default function useRiderFormChunk() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const checkIfEmpty = () => {
    const arr = Object.values(formData);
    const subArr = arr.filter((val) => typeof val == "string");
    console.log(subArr, "sub");
    // console.log(arr);

    return subArr.every((value) => value.trim() !== "");

    //find a way to not add those boolean to the arr
  };
  const formTitleStyle = {
    fontSize: "11px",
    fontWeight: "700",
    color: "#242424",
    lineHeight: "1.5",
    fontFamily: "Plus Jakarta Sans",
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      console.log(formData);
      if (error === "") {
        setLoading(true);
        const { data } = await axiosInstance.post(
          `${
            import.meta.env.VITE_AUTH_ENDPOINT
          }/auth_service/api/riders/signup`,
          formData
        );
        if (data.status === "success") {
          navigate(`/riders/congratulations`);
        }
      } else {
        setLoading(false);
        toast.error("Invalid Email Format");
      }
    } catch (error) {
      setLoading(false);
      const message = error.response.data.MESSAGE
        ? error.response.data.MESSAGE
        : "Something went wrong";
      toast.error(message);
    }
  };

  const handleChange = (event) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));

    checkIfEmpty();

    if (event.target.name === "email") {
      handleBlur(event.target.value);
    }
  };

  // const validateEmailFormat = (email) => {
  //   // const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   const re = /^[^\s@]+@[^\s@]+\.(com|net|org)$/i;
  //   return re.test(email);
  // };

  const handleBlur = (email) => {
    console.log(error);
    if (!validateEmailFormat(email)) {
      setError("Invalid email address");
    } else {
      setError(""); // Clear error if valid
    }
  };

  const handleCheckboxChange = (event) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.checked,
    }));

    console.log(
      event.target.name,
      event.target.checked,
      formData.accepted_privacy_policy,
      "ertghgdh"
    );
    // console.log(event.target.checked)
  };

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone_number: "",
    agreed_to_regular_updates: false,
    accepted_privacy_policy: false,
  });
  const riderForm = [
    {
      title: "First Name",
      placeholder: "Firstname",
      options: false,
      type: "text",
      name: "firstname",
      required: true,
    },
    {
      title: "Last Name",
      placeholder: "lastname",
      options: false,
      type: "text",
      name: "lastname",
      required: true,
    },
    {
      title: "Email Address",
      placeholder: "example@mail.com",
      options: false,
      type: "email",
      name: "email",
      required: true,
      error_identifier: "email",
    },
    {
      title: "Phone Number",
      placeholder: "Phone Number",
      // options: true,
      type: "number",
      phoneNumber: true,
      name: "phone_number",
      pattern: "d{11}",
      max: "99999999",
      id: "phone_number",
      required: true,
    },
  ];

  return {
    loading,
    setLoading,
    riderForm,
    formData,
    setFormData,
    formTitleStyle,
    checkIfEmpty,
    handleBlur,
    handleCheckboxChange,
    handleSubmit,
    handleChange,
    phoneNumberError,
    error,
    setError,
  };
}
