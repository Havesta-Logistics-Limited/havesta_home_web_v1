import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import { riderForm, riderStats } from "../config/rider.config";
import { Bounce, toast, ToastContainer } from "react-toastify";
import Checkbox from "@mui/joy/Checkbox";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import FAQ from "../templates/home-templates/chunks/faq/Faq.jsx";
import { setIcon } from "../redux/features/iconSlice.js";
import { useDispatch } from "react-redux";
import WebReview from "../components/landing/Reviews-Fragment/WebReview.jsx";
import MobileReview from "../components/landing/Reviews-Fragment/MobileReview.jsx";
import axiosInstance from "../config/axios.config.js";
import { CircularProgress } from "@mui/material/";
const Rider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone_number: "",
    // date_of_birth: "",
    // gender: null,
    // country: "Nigeria",
    // state: "Lagos",
    // method_of_delivery: null,
    // location: null,
    // currently_working_with_another_logistics: null,
    // NIN: null,
    // bank_name: null,
    // account_number: null,
    // guarantor_1_name: null,
    // guarantor_1_phone_number: null,
    // guarantor_2_name: null,
    // guarantor_2_phone_number: null,
    agreed_to_regular_updates: false,
    accepted_privacy_policy: false,
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setIcon("rider"));

    return () => {
      dispatch(setIcon("home"));
    };
  }, []);

  useEffect(() => {
    let input = document.querySelector(".phoneNum");

    input.addEventListener("input", (e) => {
      console.log(
        !input.value.length >= 11 && document.activeElement !== input
      );
      if (input.value.length > 11) {
        input.value = input.value.slice(0, 11);
      }
      if (input.value.length === 11 && document.activeElement === input) {
        input.classList.add(
          "focus:outline",
          "focus:outline-harvestaLightGreen"
        );
        input.classList.remove("border-red-300", "focus:outline-none");
      }

      if (input.value.length < 11 && document.activeElement === input) {
        input.classList.add("border-red-300", "focus:outline-none");
        input.classList.remove(
          "focus:outline",
          "focus:outline-harvestaLightGreen"
        );
      }
      setFormData((prev) => ({ ...prev, phone_number: input.value }));

      input.value = input.value.replace(/[^0-9]/g, "");
    });
  }, []);

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

  const validateEmailFormat = (email) => {
    // const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const re = /^[^\s@]+@[^\s@]+\.(com|net|org)$/i;
    return re.test(email);
  };

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

  // const playwithdate = (
  //   date = startDate,
  //   dur = duration,
  //   durt = durationType
  // ) => {
  //   setStartDate(date);
  //   if (dur == null || dur == "" || dur == NaN) {
  //     console.log("bad");
  //     return;
  //   }
  //   const d = new Date(date);
  //   console.log(d);
  //   if (durt == "MONTHS") {
  //     console.log(durt, 1);
  //     d.setMonth(d.getMonth() + dur);
  //   } else {
  //     console.log(durt, 2);
  //     d.setDate(d.getDate() + dur);
  //   }
  //   console.log(d);
  //   const dateObj = d;
  //   const month = dateObj.getUTCMonth() + 1; //months from 1-12
  //   const day = dateObj.getUTCDate();
  //   const year = dateObj.getUTCFullYear();
  //   let newDate = day + "-" + month + "-" + year;
  //   setFormatedEndDate(newDate);
  //   newDate = year + "-" + month + "-" + day;
  //   console.log(newDate);
  //   setEndDate(newDate);
  // };

  return (
    <>
      <ToastContainer
        position="top-center"
        hideProgressBar={true}
        closeOnClick
        transition={Bounce}
      />
      <section>
        <div className="relative pb-5">
          <div className="w-full bg-cover  py-20 bg-[url('https://res.cloudinary.com/dtc89xi2r/image/upload/v1721822845/Group_1000002050_isyw0e.png')]">
            {/* HERO SECTION */}
            <div className="mt-32 md:grid grid-cols-2 justify-items-center lg:h-[40vh] relative lg:ml-44">
              <div className=" p-2">
                <h2 className="p-3 text-[50px] font-primary font-bold lg:leading-tight lg:text-[55px] text-[#242424] text-6xl">
                  Become a Delivery <br />
                  <span className="text-white font-[700]">AGENT </span>with
                  Havesta
                </h2>
                <p className=" p-3  text-[#242424] font-primary">
                  Be your Boss. Build your income daily, weekly, or monthly.
                </p>
                {/*  <button className="mt-10 font-primary rounded-full bg-primary p-3 text-white text-xs font-bold shadow-md w-[100px] ml-2">
                  Get Started
                </button> */}
              </div>
              <div className="lg:absolute right-52">
                <img
                  src="https://res.cloudinary.com/dtc89xi2r/image/upload/v1719527279/Ellipse_69_3_yhglfw.svg"
                  alt=""
                  className="w-[400px] "
                />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 justify-items-center mt-10 font-primary">
          <h2 className="text-[54px] font-bold font-primary">
            Complete The Form
          </h2>

          <form className="my-4 lg:w-[70%] w-full p-8">
            <p className="text-xs pb-4">
              Fields marked with<span className="text-red-400"> * </span> are
              required
            </p>
            <div className="lg:grid grid-cols-2 gap-6 lg:mt-6">
              {riderForm.map((item, index) =>
                item.options ? (
                  <FormControl key={index} className="max-w-[542px] ">
                    <FormLabel style={formTitleStyle} className="font-primary">
                      {item.title}
                    </FormLabel>

                    <Select
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
                        height: "56px",
                      }}
                    >
                      {item.subItems &&
                        item.subItems.map((subItem, subIndex) => (
                          <>
                            <Option key={subIndex} value={subItem}>
                              {subItem}
                            </Option>
                          </>
                        ))}
                    </Select>
                  </FormControl>
                ) : (
                  <FormControl key={index} className="relative max-w-[542px]">
                    <FormLabel style={formTitleStyle}>
                      {item.title} &nbsp;{" "}
                      <span className="text-[12px] text-red-400"> * </span>
                    </FormLabel>
                    {/* <div className="w-full bg-red-500 absolute"> */}
                    {item.name == "phone_number" ? (
                      <div className="absolute bottom-[18px] left-2.5">
                        <img src="/icons/naija-flag.svg" alt="flag" />
                      </div>
                    ) : (
                      <div></div>
                    )}
                    <input
                      type={item.type}
                      placeholder={item.placeholder}
                      className={`border-[0.5px] border-gray p-2 rounded-md bg-gray-100 rider-field focus:outline focus:outline-harvestaLightGreen  focus:outline-1 font-primary h-[56px] text-sm w-full ${
                        item.name == "phone_number"
                          ? "pl-10 phoneNum border-[1.2px]"
                          : item.name === "phone_number" &&
                            phoneNumberError === "error"
                          ? "border-[1.2px] border-red-300 focus:border-transparent"
                          : ""
                      } ${
                        item.name === "email" &&
                        error === "Invalid email address"
                          ? "border-[1.2px] border-red-300 focus:outline-transparent focus:outline-none"
                          : ""
                      }`}
                      value={formData[item.name]}
                      name={item.name}
                      onChange={handleChange}
                      readOnly={item.constant}
                      max={item.max}
                      onInput={item.oninput}
                      id={item.id}
                      required={item.required}
                      onBlur={
                        item.name === "email"
                          ? () => handleBlur(formData.email)
                          : () => {}
                      }
                    />
                    {/* </div> */}
                    {/* {error.includes(item.error_identifier) ? (
                      <div>{error}</div>
                    ) : (
                      <div></div>
                    )} */}
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
              label="By clicking this, you accept the  privacy policy "
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
              Want to become a Vendor?{" "}
              <Link
                to="/vendor"
                className="text-harvestaLightGreen font-bold hover:text-primaryHover"
              >
                Register Here
              </Link>{" "}
            </p>
          </div>
        </div>

        <div className="w-full h-auto bg-harvestaYellow px-1 flex justify-center mt-20">
          {" "}
          {/* container */}
          <div className="w-3/4 bg-white lg:grid grid-flow-col gap-3 border-2 border-white rounded-[20px]">
            {riderStats.map((item, index) => (
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

        <div className="font-primary grid grid-flow-row justify-items-center mt-28">
          <h2 className="text-3xl font-semibold">Riders Review</h2>
          <p className="text-gray-600 text-sm mt-4 text-center">
            We are proud of our accomplishments. We will keep <br /> delivering
            excellence and satisfaction
          </p>
          <div className="mt-4">
            <MobileReview type={"rider"} />
            <WebReview
              type={"rider"}
              image={
                "https://res.cloudinary.com/dtc89xi2r/image/upload/v1721822928/Imager_k8hx5b.png"
              }
            />
          </div>
        </div>

        <div className="space-y-10 lg:space-y-0 grid grid-flow-col justify-items-center p-14 lg:w-1/2 mx-auto lg:space-x-4 mb-40 ">
          <div className=" ">
            <h1 className="text-6xl text-harvestaDarkGreen font-semibold">
              1M+
            </h1>
            <h3 className="">Monthly Customer Visit</h3>
          </div>
          <div className="">
            <h1 className="text-6xl text-harvestaDarkGreen font-semibold">
              92%
            </h1>
            <h3 className="">Customer Satisfaction Rate</h3>
          </div>
          <div className="">
            <h1 className="text-6xl text-harvestaDarkGreen font-semibold">
              4.9
            </h1>
            <h3 className="">Average Customer Ratings</h3>
          </div>
        </div>

        <FAQ />
      </section>
    </>
  );
};

export default Rider;
