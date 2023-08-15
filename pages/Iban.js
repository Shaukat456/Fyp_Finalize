import { useState } from "react";
import { MdFileDownloadDone } from "react-icons/md";

const Iban = () => {
  const [state, setState] = useState(null);

  const handleChange = event => {
    const regex = /^[0-9]*$/;
    let value = event.target.value;
    if (!regex.test(value)) {
      value = value.replace(/[^0-9]/g, "");
    }

    setState(value);
  };

  return (
    <>
      <div className=" ml-2 flex w-1/3 flex-col  text-2xl">
        <div className="flex">
          <MdFileDownloadDone className="h-fit w-[300px]   text-center  text-green-600" />
          <h1> File Uploaded Successfully</h1>
        </div>

        <div className="mb-6 ">
          <label
            for="default-input"
            className="mb-2 block text-sm font-medium text-gray-500 dark:text-white"
          >
            Enter IBAN OR ACCOUNT NO
          </label>
          <input
            type="tel"
            value={state}
            onChange={handleChange}
            placeholder="****************"
            id="default-input"
            className="block w-full rounded-lg border border-gray-300 bg-gray-200 p-5 text-lg  font-semibold text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-blue-500 dark:focus:ring-blue-500 "
          />
        </div>

        <button
          type="submit"
          className="hover:bg-primary-700 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 w-3/6  rounded-lg bg-yellow-500 px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none   focus:ring-4 "
        >
          PERFORM OCR
        </button>
      </div>
    </>
  );
};

export default Iban;
