export const Confirm = () => {
  return (
    <>
      <div className="flex w-2/6 flex-col rounded-lg border  border-gray-500 bg-yellow-500 p-3 font-semibold ">
        <h1 className="mt-5 text-xl text-green-950">Confirm Check Details</h1>
        <div className=" my-5  flex flex-col  rounded-lg bg-white ">
          <div className=" ml-2 flex  justify-between border-b-2 border-gray-200 p-4">
            <h3 className="text-gray-400"> Cheque Date </h3>
            <h3 className="text-gray-600"> 05/05/3 </h3>
          </div>

          <div className=" ml-2 flex  justify-between border-b-2 border-gray-200 p-4">
            <h3 className="text-gray-400"> Cheque Data </h3>
            <h3 className="text-gray-600"> 05/05/3 </h3>
          </div>
          <div className=" ml-2 flex  justify-between border-b-2 border-gray-200 p-4">
            <h3 className="text-gray-400"> Cheque Date </h3>
            <h3 className="text-gray-600"> 05/05/3 </h3>
          </div>

          <div className=" ml-2 flex  justify-between border-b-2 border-gray-200 p-4">
            <h3 className="text-gray-400"> Cheque Data </h3>
            <h3 className="text-gray-600"> 05/05/3 </h3>
          </div>
          <div className=" ml-2 flex  justify-between border-b-2 border-gray-200 p-4">
            <h3 className="text-gray-400"> Cheque Date </h3>
            <h3 className="text-gray-600"> 05/05/3 </h3>
          </div>

          <div className=" ml-2 flex  justify-between border-b-2 border-gray-200 p-4">
            <h3 className="text-gray-400"> Cheque Data </h3>
            <h3 className="text-gray-600"> 05/05/3 </h3>
          </div>
        </div>
        <div className="flex items-center  ">
          <button
            type="submit"
            className="hover:bg-primary-700 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 mt-5 w-2/5 rounded-lg bg-gray-500 p-3 text-center text-sm font-medium text-gray-200 focus:outline-none   focus:ring-4  "
          >
            <span>
              Data is correct! <strong>Continue</strong>
            </span>
          </button>

          <p className="mx-5 font-bold text-black underline">
            Error in the data ?
          </p>
        </div>
      </div>
    </>
  );
};
