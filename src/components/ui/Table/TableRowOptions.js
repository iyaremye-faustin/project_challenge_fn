// TableRowOptions.js
import React from 'react';

const TableRowOptions = ({ clickHandler, row, buttons }) => {
  return (
    <div className="absolute top-0 right-0 w-36 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
      <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
        {buttons &&
          buttons.options.map((option, index) => (
            <div
              key={index}
              onClick={() => clickHandler(option.action, row)}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer"
              role="menuitem"
            >
              {option.label}
            </div>
          ))}
        {buttons &&
          buttons.hasEditButton && (
            <div
              onClick={() => clickHandler('edit', row)} // Call clickHandler with 'edit' action and user data when "Edit" is clicked
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer"
              role="menuitem"
            >
              Edit
            </div>
          )}
      </div>
    </div>
  );
};

export default TableRowOptions;
