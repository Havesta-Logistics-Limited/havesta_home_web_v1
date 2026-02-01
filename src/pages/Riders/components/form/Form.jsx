import useForm from "./useForm";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import Checkbox from "@mui/joy/Checkbox";
import { Link } from "react-router-dom";
import { CircularProgress } from "@mui/material/";

export default function Form() {
  const h = useForm();
  return (
    <div className="grid grid-cols-1 justify-items-center mt-6 sm:mt-10 font-primary px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-primary mt-6 sm:mt-10 text-center">
        Complete The Form
      </h2>
      <form className="my-4 w-full max-w-4xl p-4 sm:p-6 lg:p-8">
        <p className="text-xs sm:text-sm pb-4 text-center sm:text-left">
          Fields marked with<span className="text-red-400"> * </span> are
          required
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mt-4 sm:mt-6">
          {h.riderForm.map((item, index) =>
            item.options ? (
              <FormControl key={index} className="w-full">
                <FormLabel style={h.formTitleStyle} className="font-primary text-sm sm:text-base">
                  {item.title}
                </FormLabel>

                <Select
                  placeholder={item.placeholder}
                  startDecorator={
                    item.phoneNumber ? <KeyboardArrowDown /> : false
                  }
                  endDecorator={item.phoneNumber ? "" : <KeyboardArrowDown />}
                  indicator
                  sx={{
                    padding: "8px",
                    backgroundColor: "#f3f4f6",
                    fontFamily: "Helvetica",
                    fontSize: { xs: "14px", sm: "16px" },
                    height: { xs: "48px", sm: "56px" },
                    width: "100%",
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
              <FormControl key={index} className="relative w-full">
                <FormLabel style={h.formTitleStyle} className="text-sm sm:text-base">
                  {item.title} &nbsp;{" "}
                  <span className="text-[12px] text-red-400"> * </span>
                </FormLabel>
                {item.name == "phone_number" ? (
                  <div className="absolute bottom-[14px] sm:bottom-[18px] left-2.5">
                    <img src="/icons/naija-flag.svg" alt="flag" className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                ) : (
                  <div></div>
                )}
                <input
                  type={item.type}
                  placeholder={item.placeholder}
                  className={`border border-gray-300 p-2 sm:p-3 rounded-md bg-gray-100 rider-field focus:outline focus:outline-harvestaLightGreen focus:outline-1 font-primary h-[48px] sm:h-[56px] text-sm sm:text-base w-full ${
                    item.name == "phone_number"
                      ? "pl-8 sm:pl-10 phoneNum border-[1.2px]"
                      : ""
                  } ${
                    item.name === "email" && h.error === "Invalid email address"
                      ? "border-[1.2px] border-red-300 focus:outline-transparent focus:outline-none"
                      : ""
                  }`}
                  value={h.formData[item.name]}
                  name={item.name}
                  onChange={h.handleChange}
                  readOnly={item.constant}
                  max={item.max}
                  onInput={item.oninput}
                  id={item.id}
                  required={item.required}
                  onBlur={
                    item.name === "email"
                      ? () => h.handleBlur(h.formData.email)
                      : () => {}
                  }
                />
              </FormControl>
            ),
          )}
        </div>
      </form>

      <div className="grid grid-cols-1 gap-4 sm:gap-5 p-3 sm:p-4 justify-items-center w-full max-w-md mx-auto">
        <Checkbox
          sx={{
            fontFamily: "Plus Jakarta Sans",
            fontSize: { xs: "12px", sm: "14px" },
            marginLeft: "-5px",
            alignItems: "flex-start",
          }}
          color="success"
          size="sm"
          label="I agree to get regular updates from Havesta"
          name="agreed_to_regular_updates"
          onChange={h.handleCheckboxChange}
          checked={h.formData.agreed_to_regular_updates}
        />
        <Checkbox
          sx={{
            fontFamily: "Plus Jakarta Sans",
            fontSize: { xs: "12px", sm: "14px" },
            alignItems: "flex-start",
          }}
          color="success"
          size="sm"
          label="By clicking this, you accept the privacy policy"
          name="accepted_privacy_policy"
          onChange={h.handleCheckboxChange}
          checked={h.formData.accepted_privacy_policy}
        />

        <button
          className={
            h.loading == false &&
            h.formData.accepted_privacy_policy == true &&
            h.checkIfEmpty()
              ? "mt-6 sm:mt-10 font-primary rounded-full bg-primary p-3 sm:p-4 text-white text-xs sm:text-sm font-bold shadow-md w-[120px] sm:w-[140px] hover:bg-primaryHover transition-colors duration-200"
              : "mt-6 sm:mt-10 font-primary rounded-full bg-[#005231] opacity-50 p-3 sm:p-4 text-white text-xs sm:text-sm font-bold shadow-md w-[120px] sm:w-[140px] cursor-not-allowed"
          }
          onClick={h.handleSubmit}
          disabled={
            h.loading === true ||
            h.formData.accepted_privacy_policy === false ||
            !h.checkIfEmpty()
          }
        >
          <p>
            {h.loading ? (
              <CircularProgress
                sx={{ width: "15px", height: "15px", color: "white" }}
                size="small"
              />
            ) : (
              "Submit"
            )}
          </p>
        </button>
        <p className="text-xs sm:text-sm text-center">
          Want to become a Vendor?{" "}
          <span className="block mt-1">
            <Link
              to="/vendors"
              className="text-harvestaLightGreen font-bold hover:text-primaryHover transition-colors duration-200"
            >
              Register Here
            </Link>
          </span>
        </p>
      </div>
    </div>
  );
}
