import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { MdFileDownloadDone } from "react-icons/md";
import { toast } from "react-toastify";

const Iban = () => {
  const [state, setState] = useState(null);
  const [showIban, setShowIban] = useState(false);
  const [selectedBank, setSelectedBank] = useState("");
  const action = localStorage.getItem("selectedAction");

  const handleChange = event => {
    const regex = /^[0-9]*$/;
    let value = event.target.value;
    if (!regex.test(value)) {
      value = value.replace(/[^0-9]/g, "");
    }
    setState(value);
  };
  const router = useRouter();
  const handleSubmit = async () => {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        accountNumber: state,
        bankName: selectedBank,
        transactionType: action,
      }),
    };

    try {
      const response = await fetch(
        "http://localhost:8000/verify-transaction",
        requestOptions
      );
      let data = await response.json();

      router.push("/Confirm");
      if (!data) return;
    } catch (error) {
      toast.error("Error");
      console.error("Error:", error);
    }
  };
  const handleBankChange = event => {
    setSelectedBank(event.target.value);
  };

  useEffect(() => {
    if (action === "Withdraw") {
      return setShowIban(false);
    }
    if (action === "Transfer") {
      return setShowIban(true);
    }
    console.log({ action });
  }, []);

  return (
    <>
      <div className="flex min-h-screen items-center justify-center bg-gray-100 dark:bg-gray-800">
        <div className="ml-2 w-1/3 rounded-lg bg-white p-8 text-center shadow-md">
          <div className="mb-4 flex items-center">
            <MdFileDownloadDone className="h-auto w-24 text-green-600" />
            <h1 className="ml-2">File Uploaded Successfully</h1>
          </div>

          {showIban && (
            <div className="mb-6 ">
              <div className="form-group pb-10">
                <label htmlFor="bankName" className="mb-2 block font-semibold">
                  Select Bank:
                </label>
                <select
                  required
                  className="block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200"
                  id="bankName"
                  name="bankName"
                  value={selectedBank}
                  onChange={handleBankChange}
                >
                  <option value="bank alfalah">Bank Alfalah</option>
                  <option value="meezan bank">Meezan Bank</option>
                  <option value="standard chartered bank (pakistan) limited">
                    Standard Chartered Bank (Pakistan) Limited
                  </option>
                </select>
              </div>

              <label
                htmlFor="iban-input"
                className="mb-2 block text-sm font-medium text-gray-500 dark:text-white"
              >
                Enter IBAN OR ACCOUNT NO
              </label>
              <input
                type="tel"
                value={state}
                onChange={handleChange}
                required
                placeholder="****************"
                id="iban-input"
                name="Iban"
                className="w-full rounded-lg border border-gray-300 bg-gray-200 px-4 py-2 text-lg font-semibold text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-blue-500 dark:focus:ring-blue-500"
              />
            </div>
          )}

          <button
            type="button"
            onClick={handleSubmit}
            className="mx-auto mt-4 w-3/6 transform rounded-lg bg-yellow-500 px-5 py-2.5 text-center text-sm font-medium text-white transition duration-300 ease-in-out hover:bg-yellow-600 focus:outline-none focus:ring focus:ring-yellow-300"
          >
            PROCEED
          </button>
        </div>
      </div>
    </>
  );
};

export default Iban;
