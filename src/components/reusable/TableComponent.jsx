import React, { useState } from 'react';
const DataTable = ({ data, columns, labels, actions }) => {
  const [activeRow, setActiveRow] = useState(null);

  const renderActiveStatus = (isActive) => {
    return isActive ? (
      <span className="bg-green-500 text-white rounded-md p-1">Active</span>
    ) : (
      <span className="bg-red-500 text-white rounded-md p-1">Inactive</span>
    );
  };

  return (
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
          {actions && <th>Actions</th>}
        </tr>
      </thead>
      {data?.clickable && (
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
              {actions && (
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
      )}
    </table>
  );
};

export default DataTable;
