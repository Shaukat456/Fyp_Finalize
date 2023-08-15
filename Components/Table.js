import { useEffect, useState } from "react";

const Table = () => {
  const [data, setData] = useState([]);
  const itemsPerPage = 7;
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
      const response = await fetch("http://localhost:8000/history");
      const fetchedData = await response.json();
      const refinedData = fetchedData?.rows;

      setData(refinedData?.reverse());
    } catch (error) {
      console.error("Error:", error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const currentDataPage = data.slice(firstItemIndex, lastItemIndex);

  const paginate = pageNumber => {
    setCurrentPage(pageNumber);
  };
  return (
    <>
      <div className="bg-gray-100 p-6 dark:bg-gray-900">
        <div className="mx-auto max-w-4xl">
          <div className="relative overflow-x-auto">
            <div className="mb-4 flex items-center justify-between">
              {/* <h1 className="text-2xl font-bold">Cheque History</h1> */}
            </div>

            <div className="overflow-hidden rounded-lg border-b border-gray-300 shadow dark:border-gray-700">
              <table className="min-w-full divide-y divide-gray-300 dark:divide-gray-700">
                <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-800 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Date
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Bearer Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Amount
                    </th>
                    <th scope="col" className="px-6 py-3">
                      MCIR
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Account Number
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Cheque Number
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Bank Name
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-300 bg-white dark:bg-gray-800">
                  {data?.map((item, index) => (
                    <tr
                      key={index}
                      className={`${
                        index % 2 === 0 ? "bg-gray-50" : "bg-white"
                      } dark:bg-gray-800`}
                    >
                      <td className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white">
                        {item[0]}
                      </td>
                      <td className="px-6 py-4">{item[1]}</td>
                      <td className="px-6 py-4">{item[2]}</td>
                      <td className="px-6 py-4">{item[3]}</td>
                      <td className="px-6 py-4">{item[4]}</td>
                      <td className="px-6 py-4">{item[5]}</td>
                      <td className="px-6 py-4">{item[6]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* <div className="my-4 flex justify-center">
              <nav className="block">
                <ul className="flex list-none flex-wrap rounded pl-0">
                  {Array.from({
                    length: Math.ceil(data.length / itemsPerPage),
                  }).map((page, index) => (
                    <li key={index}>
                      <button
                        onClick={() => paginate(index + 1)}
                        className={`relative block border border-r-0 border-gray-300 bg-white px-3 py-2 leading-tight text-blue-500 ${
                          currentPage === index + 1
                            ? "bg-blue-500 text-white"
                            : "text-gray-700 hover:bg-gray-100"
                        }`}
                      >
                        {index + 1}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Table;
