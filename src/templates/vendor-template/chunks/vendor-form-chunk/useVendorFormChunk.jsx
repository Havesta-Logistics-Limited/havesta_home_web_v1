import React from "react";
import { useState, useEffect } from "react";

export default function useVendorFormChunk() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
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
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    phone_number: "",
    email: "",
    name_of_business: "",
    legal_business_address: "",
    agreed_to_regular_updates: false,
    accepted_privacy_policy: false,
    // password: null,
    // date_of_birth:null,
    // gender:null,
    // category_of_business:null
  });
  const formTitleStyle = {
    fontSize: "14px",
    fontWeight: "400",
    color: "#242424",
    lineHeight: "1.5",
    fontFamily: "Plus Jakarta Sans",
  };
  const checkIfEmpty = () => {
    const arr = Object.values(formData);
    const subArr = arr.filter((val) => typeof val == "string");
    return subArr.every((value) => value.trim() !== "");
  };
  const handleInputChange = (event) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
    // console.log(
    //   e.target.value,
    //   formData[event.target.name],
    //   formData.firstname
    // );
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
  const handleBlur = (email) => {
    console.log("fregbfgerberwrfeb");
    if (!validateEmailFormat(email)) {
      setError("Invalid email address");
    } else {
      setError(""); // Clear error if valid
    }
  };
  return {
    loading,
    setLoading,
    vendorForm,
    formData,
    setFormData,
    formTitleStyle,
    checkIfEmpty,
    handleBlur,
    handleInputChange,
    handleCheckboxChange,
    handleSubmit,
    error,
    setError,
  };
}
