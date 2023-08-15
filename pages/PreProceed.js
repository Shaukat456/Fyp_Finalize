import { useRouter } from "next/router";

const PreProceed = () => {
  const router = useRouter();
  const handleActionSelect = action => {
    saveToLocalStorage(action);
    router.push("/Iban");
  };
  const saveToLocalStorage = action => {
    localStorage.setItem("selectedAction", action);
  };
  return (
    <>
      <div className="my-48 flex  items-center justify-center">
        <div className="mx-20 flex w-fit flex-col items-center justify-center space-y-4 rounded-lg border border-dotted border-gray-600 bg-slate-200 p-4">
          <div className="flex space-x-4">
            <button
              className="modal-button flex-grow rounded-lg bg-blue-500 p-6 py-3 text-center font-semibold text-white transition-colors duration-300 ease-in-out hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
              onClick={() => handleActionSelect("Withdraw")}
            >
              Withdraw
            </button>
            <button
              className="modal-button flex-grow rounded-lg bg-blue-500 p-6 py-3 text-center font-semibold text-white transition-colors duration-300 ease-in-out hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
              onClick={() => handleActionSelect("Transfer")}
            >
              Transfer
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PreProceed;
