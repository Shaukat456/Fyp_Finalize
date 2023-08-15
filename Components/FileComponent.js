import React, { useState, useRef } from "react";
import { MdOutlineFileUpload } from "react-icons/md";
import Image from "next/image"; // Assuming you're using Next.js
import { useRouter } from "next/router";

function FileComponent() {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [previewUrl, setPreviewUrl] = useState(null);
  const fileInputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState();

  const handleIconClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = event => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      const imageUrl = URL.createObjectURL(selectedFile);
      setPreviewUrl(imageUrl);
      setIsModalOpen(true);
    }
  };

  const handleActionSelect = action => {
    saveToLocalStorage(action);
    router.push("/Iban");
  };

  const saveToLocalStorage = action => {
    console.log({ action });
    localStorage.setItem("selectedAction", action);
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
          {!previewUrl && (
            <>
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
            </>
          )}
        </figure>
        {/* {isModalOpen && (
         
        )} */}
      </div>
    </div>
  );
}

export default FileComponent;
