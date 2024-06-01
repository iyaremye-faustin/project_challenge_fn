import React from 'react';

const SelectRow = ({ row, keyIndex, onselect }) => {
  return (
    <td key={Math.random()} className={'px-6 py-3 text-xs text-left text-gray-500'}>
      <span className="inline-flex items-center">
        <input
          type="checkbox"
          defaultChecked={false}
          className="text-blue-600 border-gray-200 rounded focus:ring-blue-500"
          onChange={(event) => onselect(event, row, keyIndex)}
        />
      </span>
    </td>
  );
};
export default SelectRow;
