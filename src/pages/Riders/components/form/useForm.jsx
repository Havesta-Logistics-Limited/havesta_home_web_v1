import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function useForm() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const validateEmailFormat = (email) => {
    // keep it conservative and allow common domains
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/i;
    return re.test(email);
  };

  const checkIfEmpty = () => {
    const arr = Object.values(formData);
    const subArr = arr.filter((val) => typeof val == "string");
    return subArr.every((value) => value.trim() !== "");


  };
  const formTitleStyle = {
    fontSize: "11px",
    fontWeight: "700",
    color: "#242424",
    lineHeight: "1.5",
    fontFamily: "Plus Jakarta Sans",
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (error !== "") {
          toast.error("Invalid Email Format");
          return;
    }

    setLoading(true);


    const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyPU51Ycs0MvN7EduviDO6_qbaLSrvKlNuqM3E0vmWOYkxvU5-2-8wQpa6Uw_1Jfufe/exec";

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
        navigate(`/riders/congratulations`);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
        toast.error("Something went wrong. Please try again.");
      });
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

  const handleBlur = (email) => {
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
    error,
    setError,
  };
}
