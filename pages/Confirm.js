import { useRouter } from "next/router";

const Confirm = () => {
  const router = useRouter();
  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <div className="w-2/3 flex-col rounded-lg border border-gray-500 bg-gray-100 p-3 font-semibold shadow-md">
          <h1 className="mt-5 text-xl text-green-900">Confirm Check Details</h1>
          <div className="my-5 rounded-lg bg-white shadow-sm">
            <div className="flex justify-between border-b border-gray-200 p-4">
              <h3 className="text-gray-500">Cheque Date</h3>
              <h3 className="text-gray-700">05/05/3</h3>
            </div>
            <div className="flex justify-between border-b border-gray-200 p-4">
              <h3 className="text-gray-500">Cheque Date</h3>
              <h3 className="text-gray-700">05/05/3</h3>
            </div>
            <div className="flex justify-between border-b border-gray-200 p-4">
              <h3 className="text-gray-500">Cheque Date</h3>
              <h3 className="text-gray-700">05/05/3</h3>
            </div>
            <div className="flex justify-between border-b border-gray-200 p-4">
              <h3 className="text-gray-500">Cheque Date</h3>
              <h3 className="text-gray-700">05/05/3</h3>
            </div>
            <div className="flex justify-between border-b border-gray-200 p-4">
              <h3 className="text-gray-500">Cheque Date</h3>
              <h3 className="text-gray-700">05/05/3</h3>
            </div>

            {/* Repeat for other details */}
          </div>

          <div className="mt-5 flex items-center justify-between">
            <button
              type="submit"
              onClick={() => router.push("/Home")}
              className="dark:focus:ring-primary-800 rounded-lg bg-gray-600 p-3 text-sm font-medium text-gray-200 hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-300 dark:bg-gray-800 dark:hover:bg-gray-900"
            >
              <span>
                Data is correct! <strong>Continue</strong>
              </span>
            </button>

            <p className="mx-5 cursor-pointer font-bold text-black underline">
              Error in the data?
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Confirm;
