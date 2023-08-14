import { MdDocumentScanner, MdOutlineFileUpload } from "react-icons/md";

const ChequesEntry = () => {
  return (
    <>
      <div className="">
        <div>
          <h1 className="text-2xl   font-semibold text-green-600">Scan</h1>
          <div className="flex  w-[500px] justify-center rounded-lg   border border-dotted border-gray-600 text-center">
            <figure className="">
              <MdDocumentScanner className="h-fit w-[300px]   text-center  text-gray-600" />
            </figure>
          </div>
        </div>
        <div>
          <h1 className="text-2xl font-semibold text-green-600">Scan</h1>
          <div className="flex  w-[500px] justify-center rounded-lg  border border-dotted border-gray-600 text-center">
            <figure className="">
              <MdOutlineFileUpload className="h-fit w-[300px]   text-center  text-gray-600" />
            </figure>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChequesEntry;
