import React from "react";
import useVendorFormChunk from "./useVendorFormChunk";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import Checkbox from "@mui/joy/Checkbox";
import { Link } from "react-router-dom";
import { CircularProgress } from "@mui/material/";

export default function VendorFormChunk() {
  const h = useVendorFormChunk();
  return (
    <div className="grid grid-cols-1 justify-items-center mt-20 font-primary border-4 border-red-600">
      <h2 className=" text-3xl lg:text-4xl font-bold font-primary mt-10">
        Complete The Form
      </h2>

      <form className="my-12 lg:max-w-[1154px] md  w-full p-8">
        <p className="text-xs pb-4">
          Fields marked with<span className="text-red-400"> * </span> are
          required
        </p>
        <div className="lg:grid md:grid md:grid-cols-2 grid-cols-2 gap-9 font-normal">
          {h.vendorForm.map((item, index) =>
            item.option ? (
              <FormControl key={index} className="w-full">
                <FormLabel style={h.formTitleStyle} className="font-primary">
                  {item.title}
                </FormLabel>

                <Select
                  className="h-[56px]"
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
                <FormLabel style={h.formTitleStyle}>
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
                    onChange={h.handleInputChange}
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
          onChange={h.handleCheckboxChange}
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
          onChange={h.handleCheckboxChange}
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
    </div>
  );
}
