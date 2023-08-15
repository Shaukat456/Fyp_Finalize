import { MdDocumentScanner, MdOutlineFileUpload } from "react-icons/md";
import Iban from "./Iban";
import { useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";
import { useRouter } from "next/router";

const ChequesEntry = () => {
  const webcamRef = useRef(null);
  const [isCameraPaused, setIsCameraPaused] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const [showCamera, setShowCamera] = useState(false);
  const [selectedFile, setSelectedFile] = useState([]);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [error, setError] = useState(false);

  const router = useRouter();
  const captureImage = async () => {
    setIsCameraPaused(true);
    setShowLoader(true);

    const imageSrc = await webcamRef.current.getScreenshot();

    try {
      const response = await axios.post("localhost:8000/filesend", {
        image: imageSrc,
      });

      console.log("Image uploaded successfully:", response.data);
    } catch (error) {
      console.error("Error uploading image:", error);
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
      return "ERROR UPLOADING FILES TO THE SERVER";
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
    }
  };

  const fileInputRef = useRef(null);

  const handleIconClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  const handleUpload = async () => {
    try {
      let formData = new FormData();
      formData.append("filelist", selectedFile);
      const response = await axios.post("localhost:8000/filesend", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log(response.data);

      return response.data;
    } catch (error) {
      if (error instanceof Error) {
        console.error("Error uploading file:", error.message);
        setError(true);
      }
    }
  };

  useEffect(() => {
    if (!showCamera && webcamRef.current) {
      webcamRef.current.stream.getTracks().forEach(track => track.stop());
    }
  }, [showCamera]);
  return (
    <>
      <div className="space-y-10">
        <div>
          <h1 className="text-2xl font-semibold text-green-600">SCAN</h1>
          <div
            onClick={() => setShowCamera(true)}
            className="flex  w-[500px] justify-center rounded-lg  border border-dotted border-gray-600 text-center"
          >
            {showLoader && (
              <div className="fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center bg-gray-900 bg-opacity-50">
                <div className="flex items-center justify-center space-x-2">
                  <div className="h-3 w-3 animate-pulse rounded-full bg-blue-700"></div>
                  <div className="h-3 w-3 animate-pulse rounded-full bg-blue-700"></div>
                  <div className="h-3 w-3 animate-pulse rounded-full bg-blue-700"></div>
                </div>
              </div>
            )}
            <figure className="">
              {showCamera && (
                <>
                  <Webcam
                    audio={false}
                    ref={webcamRef}
                    screenshotFormat="image/jpeg"
                    videoConstraints={{ facingMode: "environment" }}
                  />
                  <button
                    className="rounded-xl border border-blue-800 bg-blue-700 p-2 text-slate-200"
                    onClick={() => setShowCamera(false)}
                  >
                    Turn Off Camera
                  </button>
                </>
              )}
              {!showCamera && (
                <MdDocumentScanner className="h-fit w-[300px]   text-center  text-gray-600" />
              )}
            </figure>
          </div>
          {!isCameraPaused && !showLoader && showCamera && (
            <button
              className="rounded-xl border border-blue-800 bg-blue-700 p-2 text-slate-200"
              onClick={captureImage}
            >
              Capture
            </button>
          )}
        </div>

        <div>
          <h1 className="text-2xl font-semibold text-green-600">UPLOAD</h1>
          <div className="flex w-[500px]  justify-center rounded-lg  border border-dotted border-gray-600 text-center">
            <figure className="">
              <input
                type="file"
                ref={fileInputRef}
                multiple
                accept="image/jpeg"
                style={{ display: "none" }}
                onChange={handleFileChange}
              />

              <MdOutlineFileUpload
                className="h-fit w-[300px]   text-center  text-gray-600"
                onClick={handleIconClick}
              />
            </figure>
            {previewUrl && (
              <Image
                src={previewUrl}
                alt="Selected file"
                width={200}
                height={200}
              />
            )}
            <div className="p-1">
              {error && (
                <div className="my-2 rounded-lg bg-red-500 p-2 text-white">
                  <p className="text-sm font-medium">
                    Please Select Atleast One File
                  </p>
                </div>
              )}
            </div>
          </div>
          <button
            onClick={handleUpload}
            disabled={!selectedFile}
            className="focus:shadow-outline-blue mt-4 transform rounded-md bg-blue-500 px-3 py-2 font-semibold text-white transition-all duration-200 ease-in-out hover:scale-105 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Upload
          </button>
        </div>
      </div>
    </>
  );
};

export default ChequesEntry;
