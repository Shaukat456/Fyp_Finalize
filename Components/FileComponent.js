import React, { useState, useRef } from "react";
import { MdOutlineFileUpload } from "react-icons/md"; // Import your icon library here
import { useRouter } from "next/router"; // Import the router from your specific package
import Image from "next/image"; // Import the Image component from your specific package

function FileComponent() {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [previewUrl, setPreviewUrl] = useState(null);
  const fileInputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState();

  const handleIconClick = () => {
    fileInputRef.current.click();
  };

  const handleUpload = async eve => {
    eve.preventDefault();
    const formData = new FormData();
    formData.append("filesList", selectedFile);

    console.log({ formData });
    const requestOptions = {
      method: "POST",
      body: formData,
    };

    try {
      router.push("/PreProceed");
      const response = await fetch(
        "http://localhost:8000/filesend",
        requestOptions
      );
      await response.json();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleFileChange = event => {
    const newSelectedFile = event.target.files[0];
    if (newSelectedFile) {
      setSelectedFile(newSelectedFile);
      const imageUrl = URL.createObjectURL(newSelectedFile);
      setPreviewUrl(imageUrl);
      setIsModalOpen(true);
    }
  };

  return (
    <div className="flex items-center justify-center">
      <div className="flex cursor-pointer justify-center rounded-lg border border-dotted border-gray-600 bg-slate-200 p-4">
        <h1 className="text-xl font-semibold text-green-600">UPLOAD</h1>

        <figure className="">
          {previewUrl && (
            <div className="p-5">
              <Image
                src={previewUrl}
                alt="Selected file"
                width={200}
                height={200}
              />
            </div>
          )}
          <div className="flex justify-center">
            <button
              onClick={handleUpload}
              disabled={!selectedFile}
              className="mt-8 transform rounded-md bg-blue-500 px-6 py-3 text-lg font-semibold text-white transition-transform duration-200 ease-in-out hover:scale-105 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Upload
            </button>
          </div>
          {!previewUrl && (
            <>
              <input
                type="file"
                ref={fileInputRef}
                accept="image/jpg"
                style={{ display: "none" }}
                onChange={handleFileChange}
              />
              <MdOutlineFileUpload
                className="h-fit w-[300px] cursor-pointer text-center text-gray-600"
                onClick={handleIconClick}
              />
            </>
          )}
        </figure>
      </div>
    </div>
  );
}

export default FileComponent;
