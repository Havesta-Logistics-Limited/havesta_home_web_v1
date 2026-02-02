import { useEffect, useRef, useState } from "react";
import uploadList from "../../config/uploadrider.config.jsx";
import checkIcon from "../../assets/icons/icon.webp";
import cancelSend from "../../assets/icons/cancel.webp";
import axiosInstance from "../../config/axios.config.js";
// import LogoNav from "../../common/LogoNav.jsx";
import { useNavigate } from "react-router-dom";
import Logo from "../../common/Logo.jsx";
import imageCompression from "browser-image-compression";

const UploadRider = () => {
  const [progress, setProgress] = useState({});
  const [vehicleImgFile, setVehicleImgFile] = useState([]);
  const [idImgFile, setIdImgFile] = useState([]);
  const navigate = useNavigate();
  const fileVehicleInputRef = useRef();
  const fileIdInputRef = useRef();

  const handleUploadVehicleClick = () => {
    fileVehicleInputRef.current.click();
  };

  const handleUploadIdClick = () => {
    fileIdInputRef.current.click();
  };

  const handleFileChange = (event) => {
    let selectedFile, selectedId;
    if (event.target.id === "vehicle") {
      // setVehicleImgFile(event.target.files);
      selectedFile = Array.from(event.target.files);
      setVehicleImgFile([...event.target.files]);
      selectedFile.forEach((file) => {
        simulateUploadProgress(file);
      });
    } else if (event.target.id === "id") {
      setIdImgFile([...event.target.files]);
      selectedId = Array.from(event.target.files);

      selectedId.forEach((file) => {
        simulateUploadProgress(file);
      });
    }

    // console.log(idImgFile);
  };

  const simulateUploadProgress = (file) => {
    const totalSize = file.size;
    let uploadedSize = 0;
    const interval = setInterval(() => {
      uploadedSize += totalSize / 100;
      const percentComplete = Math.round((uploadedSize / totalSize) * 100);
      setProgress((prevProgress) => ({
        ...prevProgress,
        [file.name]: percentComplete,
      }));
      if (percentComplete >= 100) {
        clearInterval(interval);
      }
    }, 10);
  };

  const cancelUpload = (fileName) => {
    // console.log(`Cancelling upload of ${fileName}`);
    if (vehicleImgFile[0] && fileName === vehicleImgFile[0].name) {
      setVehicleImgFile([]);
      setProgress((prevProgress) => {
        const updatedProgress = { ...prevProgress };
        delete updatedProgress[fileName];
        return updatedProgress;
      });
    } else if (fileName === idImgFile[0].name) {
      setIdImgFile([]);
      setProgress((prevProgress) => {
        const updatedProgress = { ...prevProgress };
        delete updatedProgress[fileName];
        return updatedProgress;
      });
    }
  };

  const handleSubmit = async (e) => {
    const allowedFormats = [
      "image/jpeg",
      "image/png",
      "image/pdf",
      "image/jpg",
    ];
    // console.log(allowedFormats.includes(vehicleImgFile[0].type), allowedFormats.includes(idImgFile[0].type))
    // console.log(vehicleImgFile.length > 0)

    // console.log(vehicleImgFile[0].type, idImgFile, "these are the files in submit");
    // console.log(vehicleImgFile.length > 0 &&
    //   idImgFile.length > 0 &&
    //   allowedFormats.includes(
    //     vehicleImgFile[0].type && allowedFormats.includes(idImgFile[0].type)))
    e.preventDefault();
    const options = {
      maxSizeMB: 1.5,
      maxWidthOrHeight: 1200,
      useWebWorker: true,
    };
    try {
      if (
        vehicleImgFile.length > 0 &&
        idImgFile.length > 0 &&
        allowedFormats.includes(vehicleImgFile[0].type) &&
        allowedFormats.includes(idImgFile[0].type)
      ) {
        const compressedVehicleImg = await imageCompression(
          vehicleImgFile[0],
          options,
        );
        const compressedIdImg = await imageCompression(idImgFile[0], options);

        const formData = new FormData();
        formData.append("vehicle_image", compressedVehicleImg);
        formData.append("ID_image", compressedIdImg);

        const data = await axiosInstance.post(
          `${
            import.meta.env.VITE_AUTH_ENDPOINT
          }/auth_service/api/riders/upload`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          },
        );

        console.log(data);

        if (data.data.success) {
          navigate("/finalmessage");
        }
      } else throw new Error("Format must be in png,jpeg or pdf");
    } catch (err) {
      console.error(err);
    }
  };

  // NOTE: This screen currently doesn't store files in `files`; uploads are tracked
  // via `vehicleImgFile` and `idImgFile`. Leaving the button state driven elsewhere.

  return (
    <>
      <section className="bg-harvestaYellow h-[100vh] lg:h-screen overflow-hidden relative">
        <div className="w-full absolute ml-6 mt-8 lg:ml-20 lg:mt-8">
          <Logo />
        </div>
        <div className=" mt-[35%] lg:items-start lg:mt-[18%] lg:flex lg:w-[85%] lg:h-fit lg:mx-auto lg:gap-52 grid-flow-col justify-items-center items-center  ">
          <div className="w-[95%] lg:w-full lg:self-center ml-4 lg:ml-0">
            <h1 className="text-[26px] lg:text-[60px]  mb-4 text-white font-primary font-semibold ">
              Upload Your <br className="hidden lg:block" /> Documents
            </h1>

            {uploadList.map((item, index) => (
              <p
                key={index}
                className="grid grid-flow-col list-none text-left justify-start mb-3 items-center gap-2 font-primary font-bold text-md"
              >
                <span>
                  <img src={checkIcon} alt="" className="w-3" />
                </span>
                {item}
              </p>
            ))}
          </div>

          <section className=" w-[95%] mx-auto lg:mx-0 py-8 lg:py-0 flex flex-col lg:w-[45%] rounded-md bg-white lg:h-fit">
            <div className=" w-full p-4 md:w-[500px] lg:w-[550px] rounded-md flex flex-col h-fit lg:h-[430px] lg:px-6 lg:shadow-uploadRiderShadow lg:bg-whit">
              {/* <div className="p-3">
                <h3 className="text-harvestaSecondBlack font-bold font-primary">
                  Upload and attach files
                </h3>
                <p className="text-gray-400 text-xs font-semibold mt-1.5">
                  Supported formats: png, jpeg, pdf
                </p>
              </div> */}

              <form
                className=" w-full flex flex-col gap-4 lg:gap-8 h-60 lg:h-fit lg:mt-16"
                onSubmit={handleSubmit}
              >
                {/* top upload rider starts here */}
                {vehicleImgFile <= 0 ? (
                  <div className="flex px-3 lg:px-6 pt-4 pb-10 justify-between min-w-full shadow-uploadRiderShadow rounded-lg lg:rounded-sm bg-white">
                    <div className="flex items-start gap-4 ">
                      <img
                        src="/icons/upload-icon.svg"
                        alt="upload-icon"
                        className="mt-2 lg:w-[24.3px] lg:h-[23.4px] w-[18px] h-[18px] hidden lg:block"
                      />
                      <div className="">
                        <p className="lg:text-[20px]  font-medium">
                          Upload a photo of your vehicle
                        </p>
                        <p className=" text-[11px] lg:text-[15px] text-[#919AA9]">
                          Supported formats: png, jpeg, pdf
                        </p>
                      </div>
                    </div>

                    <div
                      className=" h-[25px] w-[80px] flex justify-center items-center lg:h-[40px] border-[1.5px] border-black rounded-[23.6px] lg:w-[125px] font-medium text-sm lg:text-base"
                      // ref={fileInputRef}
                      onClick={handleUploadVehicleClick}
                    >
                      <input
                        type="file"
                        ref={fileVehicleInputRef}
                        className="hidden"
                        id="vehicle"
                        onChange={handleFileChange}
                        name="vehicle_image"
                        // accept="image/*"
                      />
                      <p>Upload</p>
                    </div>
                  </div>
                ) : (
                  vehicleImgFile.map((file, index) => (
                    <div
                      key={index}
                      className="bg-[#F8FAFB] overflow-hidden lg:mt-[-30px] rounded-lg w-full h-fit pb-6"
                    >
                      <div className="grid grid-flow-col justify-between p-2 items-center">
                        <div className="grid grid-flow-col items-center space-x-2">
                          <img
                            src="/icons/file-icon.svg"
                            alt="file icon"
                            className="w-[50px]  p-2 rounded-md"
                          />
                          <div>
                            <p className="text-xs font-primary text-harvestaBlack font-bold">
                              {file.name}
                            </p>
                            <p className="text-xs text-gray-400 font-semibold">
                              {`${(file.size / (1024 * 1024)).toFixed(2)} MB`}
                            </p>
                          </div>
                        </div>
                        <div>
                          <img
                            src={cancelSend}
                            alt="cancel"
                            onClick={() => cancelUpload(vehicleImgFile[0].name)}
                            className="cursor-pointer p-2"
                          />
                        </div>
                      </div>
                      <div className="relative">
                        <div
                          className="bg-harvestaYellow h-1.5 rounded mb-1.5 ml-2 w-[100px]"
                          style={{
                            width: `${progress[file.name] || 0}%`,
                            maxWidth: "90%",
                          }}
                        ></div>
                        <p className="text-[10px] absolute top-0 bottom-0 right-0 flex items-center pr-2 ml-2 font-primary font-semibold text-[#8C96A6]">
                          {progress[file.name] || 0}%
                        </p>
                      </div>
                    </div>
                  ))
                )}

                {/* top upload ends here */}
                {idImgFile.length <= 0 ? (
                  <div className="flex pt-4 pb-10 px-3 justify-between w-full shadow-uploadRiderShadow rounded-lg lg:rounded-sm lg:px-6 bg-white">
                    <div className="flex items-start gap-4 ">
                      <img
                        src="/icons/upload-icon.svg"
                        alt="upload-icon"
                        className="mt-2 lg:w-[24.3px] lg:h-[23.4px] w-[18px] h-[18px] hidden lg:block"
                      />
                      <div className="">
                        <p className=" text-base lg:text-[20px]  font-medium">
                          Upload a valid ID
                        </p>
                        <p className=" text-[11px] lg:text-[15px] text-[#919AA9]">
                          Supported formats: png, jpeg, pdf
                        </p>
                      </div>
                    </div>

                    <div
                      className=" h-[25px] w-[80px] flex justify-center items-center lg:h-[40px] border-[1.5px] border-black rounded-[23.6px] lg:w-[125px] font-medium text-sm lg:text-base"
                      onClick={handleUploadIdClick}
                    >
                      <input
                        type="file"
                        ref={fileIdInputRef}
                        className="hidden"
                        id="id"
                        onChange={handleFileChange}
                        name="ID_image"
                      />
                      <p>Upload</p>
                    </div>
                  </div>
                ) : (
                  idImgFile.map((file, index) => (
                    <div
                      key={index}
                      className="bg-[#F8FAFB] overflow-hidden mt-2 lg:mt-0 rounded-lg w-full h-fit pb-6"
                    >
                      <div className="grid grid-flow-col justify-between p-2 items-center">
                        <div className="grid grid-flow-col items-center space-x-2">
                          <img
                            src="/icons/file-icon.svg"
                            alt="file-icon"
                            className="  p-2 rounded-md w-[50px]"
                          />
                          <div>
                            <p className="text-xs font-primary text-harvestaBlack font-bold">
                              {file.name}
                            </p>
                            <p className="text-xs text-gray-400 font-semibold">
                              {`${(file.size / (1024 * 1024)).toFixed(2)} MB`}
                            </p>
                          </div>
                        </div>
                        <div>
                          <img
                            src={cancelSend}
                            alt="cancel"
                            onClick={() => cancelUpload(idImgFile[0].name)}
                            className="cursor-pointer p-2"
                          />
                        </div>
                      </div>
                      <div className="relative">
                        <div
                          className="bg-harvestaYellow h-1.5 rounded mb-1.5 ml-2 w-[100px] "
                          style={{
                            width: `${progress[file.name] || 0}%`,
                            maxWidth: "90%",
                          }}
                        ></div>
                        <p className="text-[10px] absolute top-0 bottom-0 right-0 flex items-center pr-2 ml-2 font-primary font-semibold text-[#8C96A6]">
                          {progress[file.name] || 0}%
                        </p>
                      </div>
                    </div>
                  ))
                )}

                {/* // <div className="flex pt-4 pb-10 px-3 justify-between w-full shadow-uploadRiderShadow rounded-lg lg:rounded-sm lg:px-6 bg-white">
                //   <div className="flex items-start gap-4 ">
                //     <img
                //       src="/icons/upload-icon.svg"
                //       alt="upload-icon"
                //       className="mt-2 lg:w-[24.3px] lg:h-[23.4px] w-[18px] h-[18px] hidden lg:block"
                //     />
                //     <div className="">
                //       <p className=" text-base lg:text-[20px]  font-medium">
                //         Upload a valid ID
                //       </p>
                //       <p className=" text-[11px] lg:text-[15px] text-[#919AA9]">
                //         Supported formats: png, jpeg, pdf
                //       </p>
                //     </div>
                //   </div>

                //   <div
                //     className=" h-[25px] w-[80px] flex justify-center items-center lg:h-[40px] border-[1.5px] border-black rounded-[23.6px] lg:w-[125px] font-medium text-sm lg:text-base"
                //     onClick={handleUploadIdClick}
                //   >
                //     <input
                //       type="file"
                //       ref={fileIdInputRef}
                //       className="hidden"
                //       id="id"
                //       onChange={handleFileChange}
                //     />
                //     <p>Upload</p>
                //   </div>
                // </div> */}
                {/* <button>submit</button> */}
              </form>

              {/* {files.map((file, index) => (
                <div
                  key={index}
                  className="bg-gray-200 overflow-hidden mt-4 rounded-lg w-full"
                >
                  <div className="grid grid-flow-col justify-between p-2 items-center">
                    <div className="grid grid-flow-col items-center space-x-2">
                      <img
                        src={uploadIcon}
                        alt=""
                        className="w-[30px] bg-white p-2 rounded-md"
                      />
                      <div>
                        <p className="text-xs font-primary text-harvestaBlack font-bold">
                          {file.name}
                        </p>
                        <p className="text-xs text-gray-400 font-semibold">
                          {`${file.size/(1024 * 1024).toFixed(2)}MB`}
                        </p>
                      </div>
                    </div>
                    <div>
                      <img
                        src={cancelSend}
                        alt="cancel"
                        onClick={() => cancelUpload(file.name)}
                        className="cursor-pointer p-2"
                      />
                    </div>
                  </div>
                  <div className="relative">
                    <div
                      className="bg-harvestaYellow h-1.5 rounded mb-1.5 ml-2 w-[100px]"
                      style={{
                        width: `${progress[file.name] || 0}%`,
                        maxWidth: "90%",
                      }}
                    ></div>
                    <p className="text-[10px] absolute top-0 bottom-0 right-0 flex items-center pr-2 ml-2 font-primary font-semibold text-gray-600">
                      {progress[file.name] || 0}%
                    </p>
                  </div>
                </div>
              ))} */}
              <button
                className={`p-2.5 rounded-full font-primary text-sm font-semibold text-white w-1/4 mt-8  mx-auto ${
                  vehicleImgFile.length > 0 && idImgFile.length > 0
                    ? "bg-harvestaBlack hover:bg-black block"
                    : "bg-gray-300 hover:none opacity-80 hidden"
                }`}
                onClick={(e) => handleSubmit(e)}
              >
                Submit
              </button>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default UploadRider;
