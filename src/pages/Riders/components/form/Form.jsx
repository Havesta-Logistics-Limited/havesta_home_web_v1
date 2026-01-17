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
    <div className="grid grid-cols-1 justify-items-center mt-10 font-primary">
      <h2 className=" text-3xl lg:text-4xl font-bold font-primary mt-10">
        Complete The Form
      </h2>
      <form className="my-4 lg:w-[70%] w-full p-8">
        <p className="text-xs pb-4">
          Fields marked with<span className="text-red-400"> * </span> are
          required
        </p>
        <div className="lg:grid grid-cols-2 gap-6 lg:mt-6">
          {h.riderForm.map((item, index) =>
            item.options ? (
              <FormControl key={index} className="max-w-[542px] ">
                <FormLabel style={h.formTitleStyle} className="font-primary">
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
                <FormLabel style={h.formTitleStyle}>
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

      <div className="grid grid-col-1 gap-5 p-3 justify-items-center">
        <Checkbox
          sx={{
            fontFamily: "Plus Jakarta Sans",
            fontSize: "12px",
            marginLeft: "-5px",
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
            fontSize: "12px",
          }}
          color="success"
          size="sm"
          label="By clicking this, you accept the  privacy policy "
          name="accepted_privacy_policy"
          onChange={h.handleCheckboxChange}
          checked={h.formData.accepted_privacy_policy}
        />

        <button
          className={
            h.loading == false &&
            h.formData.accepted_privacy_policy == true &&
            h.checkIfEmpty()
              ? "mt-10 font-primary rounded-full bg-primary p-3 text-white text-xs font-bold shadow-md w-[100px] hover:bg-primaryHover"
              : "mt-10 font-primary rounded-full bg-[#005231] opacity-50 p-3 text-white text-xs font-bold shadow-md w-[100px] cursor-not-allowed"
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
        <p className="text-xs">
          Want to become a Vendor?{" "}
          <span className="block text-center mt-1">
            <Link
              to="/vendor"
              className="text-harvestaLightGreen font-bold hover:text-primaryHover"
            >
              Register Here
            </Link>
          </span>
        </p>
      </div>
    </div>
  );
}
