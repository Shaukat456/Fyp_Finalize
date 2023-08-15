import { useRouter } from "next/router";

const Confirm = () => {
  const router = useRouter();
  return (
    <>
    <div className="flex h-screen items-center justify-center">
  <div className="w-2/3 bg-gray-100 p-5 rounded-lg shadow-md text-center">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className="mx-auto w-16 h-16 text-green-600"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M5 13l4 4L19 7"
      />
    </svg>
    <h1 className="mt-3 text-2xl font-semibold text-gray-800">
      Verification Successful
    </h1>
    <p className="mt-2 text-gray-600">
      Your information has been successfully verified.
    </p>
    
    <div className="mt-5 flex justify-center">
      <button
        type="submit"
        onClick={() => router.push("/Home")}
        className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-300"
      >
        Continue to Home
      </button>
    </div>
  </div>
</div>
    
    </>
  );
};

export default Confirm;
