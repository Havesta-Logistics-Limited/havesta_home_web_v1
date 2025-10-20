import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import { Bounce, toast, ToastContainer } from "react-toastify";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import { vendorStats } from "../../config/vendors.config";
import Checkbox from "@mui/joy/Checkbox";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import ReviewsRoutes from "../../routes/reviews.routes";

import MobileReview from "../../components/landing/Reviews-Fragment/MobileReview.jsx";
import WebReview from "../../components/landing/Reviews-Fragment/WebReview.jsx";
import axiosInstance from "../../config/axios.config.js";
import { CircularProgress } from "@mui/material/";
import Faq from "../home-templates/chunks/faq/Faq.jsx";
import VendorHeroChunk from "./chunks/vendor-hero-chunk/VendorHeroChunk.jsx";
5;
export default function VendorTemplate() {
  const formTitleStyle = {
    fontSize: "14px",
    fontWeight: "400",
    color: "#242424",
    lineHeight: "1.5",
    fontFamily: "Plus Jakarta Sans",
  };

  const [currentSlide, setCurrentSlide] = useState(0);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [error, setError] = useState("");

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
  useEffect(() => {
    let input = document.querySelector(".phoneNum");

    input.addEventListener("input", (e) => {
      if (input.value.length > 11) {
        input.value = input.value.slice(0, 11);
      }

      if (input.value.length === 11 && document.activeElement === input) {
        input.classList.add(
          "focus:outline",
          "focus:outline-harvestaLightGreen"
        );
        input.classList.remove("border-red-300", "focus:outline-none");
        input.classList.remove("border-red-300");
      }
      // if (input.value.length < 11 && document.activeElement !== input) {
      //   // input.classList.remove("focus:outline","focus:outline-harvestaLightGreen")
      //   // input.classList.add("outline-red-500", "outline-none")
      //   console.log("grtrbthny4tbgerwefvcds")

      //   // input.classList.add("focus:outline-none")
      // }
      if (input.value.length < 11 && document.activeElement === input) {
        input.classList.add("border-red-300", "focus:outline-none");
        input.classList.remove(
          "focus:outline",
          "focus:outline-harvestaLightGreen"
        );
        // input.classList.add("focus:border-transparent")
      }
      setFormData((prev) => ({ ...prev, phone_number: input.value }));

      input.value = input.value.replace(/[^0-9]/g, "");
    });
  }, []);

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

  const validateEmailFormat = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.(com|net|org)$/i;
    return re.test(email);
  };

  const handleBlur = (email) => {
    console.log("fregbfgerberwrfeb");
    if (!validateEmailFormat(email)) {
      setError("Invalid email address");
    } else {
      setError(""); // Clear error if valid
    }
  };
  return (
    <>
      <ToastContainer
        position="top-center"
        hideProgressBar={true}
        closeOnClick
        transition={Bounce}
      />
      <section>
        <VendorHeroChunk />
        {/* <div className="grid grid-cols-1 justify-items-center mt-20 font-primary border-4">
          <h2 className=" text-3xl lg:text-4xl font-bold font-primary mt-10">
            Complete The Form
          </h2>

          <form className="my-12 lg:max-w-[1154px] md  w-full p-8">
            <p className="text-xs pb-4">
              Fields marked with<span className="text-red-400"> * </span> are
              required
            </p>
            <div className="lg:grid md:grid md:grid-cols-2 grid-cols-2 gap-9 font-normal">
              {vendorForm.map((item, index) =>
                item.option ? (
                  <FormControl key={index} className="w-full">
                    <FormLabel style={formTitleStyle} className="font-primary">
                      {item.title}
                    </FormLabel>

                    <Select
                      className="h-[56px]"
                      placeholder={item.placeholder}
                      startDecorator={
                        item.phoneNumber ? <KeyboardArrowDown /> : false
                      }
                      endDecorator={
                        item.phoneNumber ? "" : <KeyboardArrowDown />
                      }
                      indicator
                      sx={{
                        padding: "8px",
                        backgroundColor: "#f3f4f6",
                        fontFamily: "Helvetica",
                        fontSize: "12px",
                      }}
                    >
                      {item.subItems &&
                        item.subItems.map((subItem, subIndex) => (
                          <>
                            <Option
                              key={subIndex}
                              value={subItem}
                              sx={{
                                "&:hover": {
                                  backgroundColor: "#80EEC6", // Customize the hover color
                                },
                                "&.Mui-selected": {
                                  backgroundColor: "#01BE72", // Keeps the selected item's background unchanged
                                  "&:hover": {
                                    backgroundColor: "", // Keeps the hover effect for the selected item
                                  },
                                },
                              }}
                            >
                              {subItem}
                            </Option>
                          </>
                        ))}
                    </Select>
                  </FormControl>
                ) : (
                  <FormControl key={index} className=" w-full mt-4">
                    <FormLabel style={formTitleStyle}>
                      {item.title} &nbsp;{" "}
                      <span className="text-[12px] text-red-400"> * </span>
                    </FormLabel>
                    <div className="w-full relative">
                      <input
                        type={item.type}
                        placeholder={item.placeholder}
                        className={`border-[0.5px] w-full h-[56px] border-gray p-2 rounded-md bg-gray-100 rider-field focus:outline focus:outline-1 focus:outline-harvestaLightGreen font-primary text-sm ${
                          item.title == "Phone Number"
                            ? "pl-12 phoneNum border-[1.2px]"
                            : ""
                        }
                          ${
                            item.name === "email" &&
                            error === "Invalid email address"
                              ? "border-[1.2px] border-red-300 focus:outline-transparent focus:outline-none"
                              : ""
                          }`}
                        onChange={handleInputChange}
                        name={item.name}
                        onBlur={
                          item.name === "email"
                            ? () => handleBlur(formData.email)
                            : () => {}
                        }
                      />
                      <img
                        src={item.img ? item.img : {}}
                        alt={item.img ? "naija-icon" : ""}
                        className={`absolute top-5 left-3 ${
                          item.img ? "" : "hidden"
                        }`}
                      />
                    </div>
                  </FormControl>
                )
              )}
            </div>
          </form>
          <div className="grid grid-col-1 gap-5 p-3 justify-items-center">
            <Checkbox
              sx={{
                fontFamily: "Plus Jakarta Sans",
                fontSize: "12px",
                marginLeft: "-5px",
              }}
              color="success"
              size="sm"
              label="I agree to get regular updates from Harvesta"
              name="agreed_to_regular_updates"
              onChange={handleCheckboxChange}
              checked={formData.agreed_to_regular_updates}
            />
            <Checkbox
              sx={{
                fontFamily: "Plus Jakarta Sans",
                fontSize: "12px",
              }}
              color="success"
              size="sm"
              label="By clicking this, you accept the  privacy policy"
              name="accepted_privacy_policy"
              onChange={handleCheckboxChange}
              checked={formData.accepted_privacy_policy}
            />

            <button
              className={
                loading == false &&
                formData.accepted_privacy_policy == true &&
                checkIfEmpty()
                  ? "mt-10 font-primary rounded-full bg-primary p-3 text-white text-xs font-bold shadow-md w-[100px] hover:bg-primaryHover"
                  : "mt-10 font-primary rounded-full bg-[#005231] opacity-50 p-3 text-white text-xs font-bold shadow-md w-[100px] cursor-not-allowed"
              }
              onClick={handleSubmit}
              disabled={
                loading === true ||
                formData.accepted_privacy_policy === false ||
                !checkIfEmpty()
              }
            >
              <p>
                {loading ? (
                  <CircularProgress
                    sx={{ width: "15px", height: "15px", color: "white" }}
                    size="small"
                  />
                ) : (
                  "Submit"
                )}
              </p>
            </button>
            <p className="text-xs">
              Want to become a Rider?{" "}
              <Link
                to="/rider"
                className="text-harvestaLightGreen font-bold hover:text-primaryHover"
              >
                Register Here
              </Link>{" "}
            </p>
          </div>
        </div> */}

        <div className="w-full h-auto bg-harvestaLightGreen px-3 flex justify-center mt-20">
          {" "}
          {/* container */}
          <div className="w-3/4 bg-white lg:grid grid-flow-col gap-3  rounded-[20px]">
            {vendorStats.map((item, index) => (
              <div
                key={index}
                className="grid grid-flow-col items-center font-primary text-[13px] gap-2 p-6 w-[300px] font-semibold "
              >
                <img src={item.image} alt="icon" className="w-10" />
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="font-primary p-0 grid grid-flow-row justify-items-center mt-28">
          <h2 className="text-3xl font-semibold">Vendor Reviews</h2>
          <p className="text-gray-600 text-sm mt-4 text-center">
            We are proud of our accomplishments. We will keep <br /> delivering
            excellence and satisfaction
          </p>

          <div className="mt-4">
            <MobileReview type={"vendor"} />
            <WebReview
              type={"vendor"}
              image={
                "https://res.cloudinary.com/dtc89xi2r/image/upload/v1721823042/Imagev_zvxpgl.png"
              }
            />
          </div>
        </div>

        <div className="space-y-10 lg:grid grid-cols-3 justify-items-center p-14 lg:w-1/2 mx-auto lg:space-x-4 mb-40">
          <div className="items-center flex flex-col">
            <h1 className="text-6xl text-harvestaDarkGreen font-semibold">
              1M+
            </h1>
            <h3 className="">Monthly Customer Visit</h3>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-6xl text-harvestaDarkGreen font-semibold">
              92%
            </h1>
            <h3 className="">Customer Satisfaction Rate</h3>
          </div>
          <div className="flex flex-col items-center ">
            <h1 className="text-6xl text-harvestaDarkGreen font-semibold">
              4.9
            </h1>
            <h3 className="">Average Customer Ratings</h3>
          </div>
        </div>

        <Faq />
      </section>
    </>
  );
}
