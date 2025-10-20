import React from "react";

export default function useVendorFormChunk() {
  const formTitleStyle = {
    fontSize: "14px",
    fontWeight: "400",
    color: "#242424",
    lineHeight: "1.5",
    fontFamily: "Plus Jakarta Sans",
  };
  const handleInputChange = (event) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));

    checkIfEmpty();

    if (event.target.name === "email") {
      handleBlur(event.target.value);
    }
  };
  const handleCheckboxChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.checked,
    }));

    console.log(
      e.target.name,
      e.target.checked,
      formData.accepted_privacy_policy,
      "ertghgdh"
    );
    // console.log(event.target.checked)
  };
  const handlePrevClick = () => {
    const prevSlide =
      currentSlide === 0 ? ReviewsRoutes.length - 1 : currentSlide - 1;
    setCurrentSlide(prevSlide);
  };

  const handleNextClick = () => {
    const nextSlide =
      currentSlide === ReviewsRoutes.length - 1 ? 0 : currentSlide + 1;
    setCurrentSlide(nextSlide);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      setLoading(true);
      if (error === "") {
        const { data } = await axiosInstance.post(
          `${
            import.meta.env.VITE_AUTH_ENDPOINT
          }/auth_service/api/vendors/signup`,
          formData
        );
        setLoading(false);
        if (data) {
          navigate("/vendors/congratulations");
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
      console.log(error.response.data);
      toast.error(message);
    }
  };
  const vendorForm = [
    {
      title: "First Name",
      placeholder: "Firstname",
      type: "text",
      name: "firstname",
    },
    {
      title: "Last Name",
      placeholder: "Lastname",
      type: "text",
      name: "lastname",
    },
    {
      title: "Name of Business",
      placeholder: "Ola Buka",
      name: "name_of_business",
    },
    {
      title: "Email Address",
      // option: true
      placeholder: "Email Address",
      name: "email",
    },
    {
      title: "Phone Number",
      placeholder: "Phone Number",
      // options: true,
      type: "number",
      phoneNumber: true,
      name: "phone_number",
      pattern: "d{11}",
      maxLength: 11,
      id: "phone_number",
      required: true,
      img: "/icons/naija-flag.svg",
    },

    {
      title: "Legal Business Address",
      placeholder: "Ikosi-Ketu",
      name: "legal_business_address",
    },
  ];

  return {
    handleCheckboxChange,
    handleSubmit,
    handleNextClick,
    handlePrevClick,
    handleInputChange,
    vendorForm,
    formTitleStyle,
  };
}
