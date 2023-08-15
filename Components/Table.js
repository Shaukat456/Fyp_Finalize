import { useEffect, useState } from "react";

const Table = () => {
  const [data, setData] = useState([]);
  const itemsPerPage = 7; // Number of items per page
  const [currentPage, setCurrentPage] = useState(1);

  const exampleData = [
    {
      payBearer: 'Apple MacBook Pro 17"',
      chequeNumber: "Silver",
      accountNumber: "Laptop",
      courtesyAmount: "$2999",
      checkData: "", // Fill with appropriate value
      ifscCode: "", // Fill with appropriate value
    },
    {
      payBearer: "Microsoft Surface Pro",
      chequeNumber: "White",
      accountNumber: "Laptop PC",
      courtesyAmount: "$1999",
      checkData: "", // Fill with appropriate value
      ifscCode: "", // Fill with appropriate value
    },
    {
      payBearer: "Magic Mouse 2",
      chequeNumber: "Black",
      accountNumber: "Accessories",
      courtesyAmount: "$99",
      checkData: "", // Fill with appropriate value
      ifscCode: "", // Fill with appropriate value
    },
  ];

  async function getData() {
    try {
      const response = await fetch(
        "http://localhost:8000/history",
        requestOptions
      );
      const fetchedData = await response.json();
      setData(fetchedData.reverse()); // Reverse the data order
    } catch (error) {
      console.error("Error:", error);
    }
  }

  useEffect(() => {
    // getData();
  }, []);

  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const currentDataPage = exampleData.slice(firstItemIndex, lastItemIndex);

  const paginate = pageNumber => {
    setCurrentPage(pageNumber);
  };
  return (
    <>
      <div className="relative overflow-x-auto">
        <div className="flex justify-between">
          <h1>Cheque History</h1>
        </div>

        <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
          <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Pay / Bearer
              </th>
              <th scope="col" className="px-6 py-3">
                Cheque Number
              </th>
              <th scope="col" className="px-6 py-3">
                Account Number
              </th>
              <th scope="col" className="px-6 py-3">
                Courtesy Amount
              </th>
              <th scope="col" className="px-6 py-3">
                Check Data
              </th>
              <th scope="col" className="px-6 py-3">
                IFSC Code
              </th>
            </tr>
          </thead>
          <tbody>
            {currentDataPage.map((item, index) => (
              <tr
                key={index}
                className={`border-b ${
                  index % 2 === 0 ? "bg-white" : "dark:bg-gray-800"
                }`}
              >
                <td
                  scope="row"
                  className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                >
                  {item.payBearer}
                </td>
                <td className="px-6 py-4">{item?.chequeNumber}</td>
                <td className="px-6 py-4">{item?.accountNumber}</td>
                <td className="px-6 py-4">{item?.courtesyAmount}</td>
                <td className="px-6 py-4">{item?.checkData}</td>
                <td className="px-6 py-4">{item?.ifscCode}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="my-4 flex justify-center">
          {Array.from({ length: Math.ceil(data.length / itemsPerPage) }).map(
            (page, index) => (
              <button
                key={index}
                onClick={() => paginate(index + 1)}
                className={`mx-1 rounded-lg px-3 py-1 ${
                  currentPage === index + 1
                    ? "bg-blue-500 text-white"
                    : "bg-gray-300"
                }`}
              >
                {index + 1}
              </button>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default Table;
