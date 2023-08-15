import { MdDocumentScanner, MdOutlineFileUpload } from "react-icons/md";
import Iban from "./Iban";
import { useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";
import { useRouter } from "next/router";
import Navbar from "@/Components/Navbar";
import Modal from "@/Components/Modal";
import FileComponent from "@/Components/FileComponent";

const ChequesEntry = () => {
  const webcamRef = useRef(null);
  const [isCameraPaused, setIsCameraPaused] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const [showCamera, setShowCamera] = useState(false);
  const [selectedFile, setSelectedFile] = useState([]);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [error, setError] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAction, setSelectedAction] = useState("");
  const router = useRouter();

  const handleActionSelect = action => {
    setSelectedAction(action);
    saveToLocalStorage(action);

    router.push("/Iban");
  };

  const saveToLocalStorage = action => {
    console.log({ action });
    localStorage.setItem("selectedAction", action);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const captureImage = async () => {
    setIsCameraPaused(true);
    setShowLoader(true);
    openModal();

    const imageSrc = await webcamRef.current.getScreenshot();

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ image: imageSrc }),
    };

    try {
      const response = await fetch(
        "http://localhost:8000/filesend",
        requestOptions
      );
      const data = await response.json();
    } catch (error) {
      console.error("Error:", error);
    }

    setTimeout(() => {
      setShowLoader(false);
      setIsCameraPaused(false);
      setShowCamera(false);
    }, 4000);
  };

  const handleFileChange = event => {
    const files = event.target.files;

    if (!files || files.length <= 0) {
      setError(true);
      return;
    }

    try {
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        selectedFile.push(file);
        previewUrl.push(URL.createObjectURL(file));
      }

      setSelectedFile(selectedFile);
      setPreviewUrl(previewUrl);
    } catch (error) {
      if (error instanceof Error) {
        console.log(error?.message);
        return error.message;
      }

      return error?.message;
    }
  };

  const fileInputRef = useRef(null);

  const handleIconClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  const handleUpload = async eve => {
    eve.preventDefault();
    const formData = new FormData();
    formData.append("image", selectedFile);

    const requestOptions = {
      method: "POST",
      body: formData,
    };

    try {
      const response = await fetch(
        "http://localhost:8000/filesend",
        requestOptions
      );
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error:", error);
    }

    setTimeout(() => {
      setShowLoader(false);
    }, 4000);
  };

  useEffect(() => {
    // if (!showCamera && webcamRef.current) {
    //   webcamRef.current.stream.getTracks().forEach(track => track.stop());
    // }
  }, [showCamera]);
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 dark:bg-gray-800">
      <div className="mb-8 text-3xl font-semibold text-green-600"></div>
      <div className="my-10 w-[600px] space-y-12 rounded-lg bg-white p-6 shadow-md">
        <div className="flex items-center justify-center">
          <div
            onClick={() => setShowCamera(true)}
            className="flex cursor-pointer justify-center rounded-lg border border-dotted border-gray-600 bg-slate-200 p-4"
          >
            <h1 className="text-xl font-semibold text-green-600">SCAN</h1>
            {showLoader && (
              <div className="fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center bg-gray-900 bg-opacity-50">
                <div className="flex items-center space-x-2">
                  <div className="h-3 w-3 animate-pulse rounded-full bg-blue-700"></div>
                  <div className="h-3 w-3 animate-pulse rounded-full bg-blue-700"></div>
                  <div className="h-3 w-3 animate-pulse rounded-full bg-blue-700"></div>
                </div>
              </div>
            )}
            <figure className="">
              {showCamera && (
                <Webcam
                  audio={false}
                  ref={webcamRef}
                  screenshotFormat="image/jpg"
                  videoConstraints={{ facingMode: "environment" }}
                />
              )}
              {!showCamera && (
                <MdDocumentScanner className="h-fit w-[300px] text-center text-gray-600" />
              )}
            </figure>
          </div>
          {!isCameraPaused && !showLoader && showCamera && (
            <button
              className="transform rounded-lg border border-blue-800 bg-blue-700 p-2 text-slate-200 transition duration-300 ease-in-out hover:bg-blue-600 focus:outline-none"
              onClick={captureImage}
            >
              Capture
            </button>
          )}
          {isModalOpen && (
            <div className="space-y-2">
              <button
                className="modal-button w-full rounded-md bg-blue-500 py-2 text-center font-semibold text-white transition-colors duration-300 ease-in-out hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
                onClick={() => handleActionSelect("Withdraw")}
              >
                Withdraw
              </button>
              <button
                className="modal-button w-full rounded-md bg-blue-500 py-2 text-center font-semibold text-white transition-colors duration-300 ease-in-out hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
                onClick={() => handleActionSelect("Transfer")}
              >
                Transfer
              </button>
            </div>
          )}
        </div>

        <FileComponent />

        {/* <div className="flex items-center  justify-center  ">
          <div className="flex cursor-pointer justify-center rounded-lg border border-dotted border-gray-600 bg-slate-200 p-4">
            <h1 className="text-xl font-semibold text-green-600">UPLOAD</h1>
            <figure className="">
              <input
                type="file"
                ref={fileInputRef}
                multiple
                accept="image/jpg"
                style={{ display: "none" }}
                onChange={handleFileChange}
              />
              <MdOutlineFileUpload
                className="h-fit w-[300px] cursor-pointer text-center text-gray-600"
                onClick={handleIconClick}
              />
            </figure>
            {isModalOpen && (
              <div className="space-y-2">
                <button
                  className="modal-button w-full rounded-md bg-blue-500 py-2 text-center font-semibold text-white transition-colors duration-300 ease-in-out hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
                  onClick={() => handleActionSelect("Withdraw")}
                >
                  Withdraw
                </button>
                <button
                  className="modal-button w-full rounded-md bg-blue-500 py-2 text-center font-semibold text-white transition-colors duration-300 ease-in-out hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
                  onClick={() => handleActionSelect("Transfer")}
                >
                  Transfer
                </button>
              </div>
            )}
            {previewUrl && (
              <Image
                src={previewUrl}
                alt="Selected file"
                width={200}
                height={200}
              />
            )}
          </div>
        </div> */}
        <div className="p-1">
          {error && (
            <div className="my-2 w-1/2 rounded-lg bg-red-500 p-2 text-white">
              <p className="text-sm font-medium">
                Please Select Atleast One File
              </p>
            </div>
          )}
        </div>

        <div className="flex justify-center">
          <button
            onClick={handleUpload}
            disabled={!selectedFile}
            className="mt-8 transform rounded-md bg-blue-500 px-6 py-3 text-lg font-semibold text-white transition-transform duration-200 ease-in-out hover:scale-105 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Upload
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChequesEntry;
