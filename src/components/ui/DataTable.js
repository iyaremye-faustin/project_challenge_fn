import React, { useState } from 'react';

const DataTable = ({
  data,
  columns,
  labels,
  actions,
  totalItems,
  currentPage,
  pageSize,
  onPageChange,
  lastPage
}) => {
  const [activeRow, setActiveRow] = useState(null);

  const renderActiveStatus = (isActive) => {
    return isActive ? (
      <span className="bg-green-500 text-white rounded-md p-1">Active</span>
    ) : (
      <span className="bg-red-500 text-white rounded-md p-1">Inactive</span>
    );
  };

  return (
    <>
      <table
        className={`w-full ${
          data?.length === 0 ? 'overflow-hidden ' : 'overflow-hidden bg-gray-900'
        }`}
      >
        <thead
          className={`bg-gray-50 ${
            data?.length === 0 ? '' : 'hidden md:table-header-group ms:hidden'
          }`}
        >
          <tr className="h-10 text-[14px] text-[#4B4B4B] font-[300] items-start text-start">
            {columns.map((column, index) => (
              <th
                key={index}
                className={`px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase whitespace-nowrap ${
                  data?.length > 0 ? '' : 'hidden md:table-cell'
                }`}
              >
                {labels[column]}
              </th>
            ))}
            {actions.length > 0 && <th>Actions</th>}
          </tr>
        </thead>
        <tbody
          className={`${
            data.clickable ? 'cursor-pointer hover:bg-gray-50 ms:flex-col h-10' : 'ms:flex-col h-10'
          }`}
        >
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className="">
              {columns.map((column, columnIndex) => (
                <td key={columnIndex} className="px-6 py-3 text-xs text-left text-gray-500 w-200">
                  {row[column] !== undefined ? row[column] : ''}
                </td>
              ))}
              {actions.length > 0 && (
                <td className="flex flex-row gap-3 px-6 py-3 text-xs text-left text-gray-500 w-200 relative">
                  <div className="relative inline-block text-left z-50">
                    <div>
                      <button
                        onClick={() => setActiveRow(activeRow === rowIndex ? null : rowIndex)}
                        type="button"
                        className="text-lg text-blue-500"
                        id="options-menu"
                        aria-expanded="true"
                        aria-haspopup="true"
                      >
                        ...
                      </button>
                    </div>
                    {activeRow === rowIndex && (
                      <div className="origin-bottom-right absolute right-0 bottom-3 mt-2 w-56 z-999 rounded-md shadow-lg bg-white ">
                        <div
                          className="py-1"
                          role="menu"
                          aria-orientation="vertical"
                          aria-labelledby="options-menu"
                        >
                          {actions.map((action, actionIndex) => (
                            <button
                              key={actionIndex}
                              onClick={() => {
                                action.onClick(row);
                                setActiveRow(null);
                              }}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-300 hover:text-gray-900"
                              role="menuitem"
                            >
                              {action.label}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between items-center px-4 py-3 bg-white border-t border-gray-200 sm:px-6">
        <div className="flex-1 flex justify-between sm:hidden">
          <p className="text-sm text-gray-500">
            Showing{' '}
            <span className="font-medium mx-1">
              {Math.min((currentPage - 1) * pageSize + 1, totalItems)}
            </span>{' '}
            to{' '}
            <span className="font-medium mx-1">{Math.min(currentPage * pageSize, totalItems)}</span>{' '}
            of <span className="font-medium mx-1">{totalItems}</span> results
          </p>
          <nav
            className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
            aria-label="Pagination"
          >
            <button
              onClick={() => onPageChange(currentPage - 1)}
              className={`relative inline-flex items-center px-2 py-2 rounded-l-md  ${
                currentPage === 1
                  ? 'bg-gray-100 text-gray-500 cursor-not-allowed'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              <span className="sr-only">Previous</span>
              <svg
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M13.707 8.293a1 1 0 010 1.414L10.414 12l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {[Array.from(lastPage)].map((_, index) => (
              <button
                key={index}
                onClick={() => onPageChange(index + 1)}
                className={`relative inline-flex items-center px-4 py-2  ${
                  currentPage === index + 1
                    ? 'bg-[#EDFBFF] text-[#37C9EE]'
                    : ''
                }`}
              >
                {index + 1}
              </button>
            ))}
            <button
              onClick={() => onPageChange(currentPage + 1)}
              disabled={currentPage === lastPage}
              className={`relative inline-flex items-center px-2 py-2 rounded-r-md  ${
                currentPage === lastPage
                  ? 'bg-[#EDFBFF] text-[#37C9EE]'
                  : ''
              }`}
            >
              <span className="sr-only">Next</span>
              <svg
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M6.293 11.293a1 1 0 010-1.414L9.586 8 6.293 4.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </nav>
        </div>
        <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
          <p className="text-sm text-gray-500">
            Showing{' '}
            <span className="font-medium mx-1">
              {Math.min((currentPage - 1) * pageSize + 1, totalItems)}
            </span>{' '}
            to{' '}
            <span className="font-medium mx-1">{Math.min(currentPage * pageSize, totalItems)}</span>{' '}
            of <span className="font-medium mx-1">{totalItems}</span> results
          </p>
          <nav
            className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
            aria-label="Pagination"
          >
            <button
              onClick={() => onPageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`relative inline-flex items-center px-2 py-2 rounded-l-md ${
                currentPage === 1
                  ? 'bg-gray-100 text-gray-500 cursor-not-allowed'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              <span className="sr-only">Previous</span>
              <svg
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M13.707 8.293a1 1 0 010 1.414L10.414 12l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {[Array.from(lastPage)].map((_, index) => (
              <button
                key={index}
                onClick={() => onPageChange(index + 1)}
                className={`relative inline-flex items-center px-4 py-2 ${
                  currentPage === index + 1
                    ? 'bg-[#EDFBFF] text-[#37C9EE]'
                    : ''
                }`}
              >
                {index + 1}
              </button>
            ))}
            <button
              onClick={() => onPageChange(currentPage + 1)}
              disabled={currentPage === lastPage}
              className={`relative inline-flex items-center px-2 py-2 rounded-r-md ${
                currentPage === lastPage
                  ? 'text-gray-100 text-gray-500 cursor-not-allowed'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              <span className="sr-only">Next</span>
              <svg
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M6.293 11.293a1 1 0 010-1.414L9.586 8 6.293 4.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </nav>
        </div>
      </div>
    </>
  );
};

export default DataTable;
