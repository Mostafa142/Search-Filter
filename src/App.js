import Data from "./Data/MOCK_DATA.json";
import { useState } from "react";
function App() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="p-6">
      <h1 className="mb-4 text-3xl font-extrabold text-gray-900  md:text-5xl lg:text-6xl">
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          Search Filter
        </span>{" "}
        React JS.
      </h1>

      <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">
        Search
      </label>
      <div className="relative">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-gray-500 dark:text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </div>
        <input
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
          type="search"
          id="default-search"
          className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search"
          required
        />
      </div>
      <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
        Password requirements:
      </h2>

      <div className="overflow-x-auto relative">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6">
                First Name
              </th>
              <th scope="col" className="py-3 px-6">
                Last Name
              </th>
              <th scope="col" className="py-3 px-6">
                Email
              </th>
            </tr>
          </thead>
          <tbody>
            {Data.filter((value) => {
              if (searchTerm === "") {
                return value;
              } else if (
                value.first_name
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase())
              ) {
                return value;
              }
            }).map((value, key) => {
              if (key <= 20)
                return (
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {value.first_name}
                    </th>
                    <td className="py-4 px-6">{value.last_name}</td>
                    <td className="py-4 px-6">{value.email}</td>
                  </tr>
                );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
