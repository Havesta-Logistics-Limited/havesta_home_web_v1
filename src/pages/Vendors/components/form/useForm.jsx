import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import axiosInstance from "../../../../config/axios.config";

export default function useForm() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const validateEmailFormat = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/i;
    return re.test(email);
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
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (error !== "") {
      toast.error("Invalid Email Format");
      return;
    }

    setLoading(true);

    const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbz2hrktLKM3o6zYGn6ThKJitm7G13S_QgxON7XJ3plWN5nTe15QkMCqRjZ077klNd0g/exec";

    fetch(SCRIPT_URL, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: JSON.stringify(formData),
    })
      .then(() => {
        setLoading(false);
        // With no-cors, we assume success if the network request didn't fail
        navigate("/vendors/congratulations");
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
        toast.error("Something went wrong. Please try again.");
      });
  };
  const handleBlur = (email) => {
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
