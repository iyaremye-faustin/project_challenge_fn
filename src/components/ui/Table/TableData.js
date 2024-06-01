import React from 'react';

const TableData = ({ row, keyValue }) => {
  return (
    <td key={Math.random()} className={'px-6 py-3 text-xs text-left text-gray-500'}>
      {keyValue.isDate ? (
        <span className="inline-flex items-center">
          {new Date(row[keyValue.key]).toDateString('en-GB')}
        </span>
      ) : (
        <span className="inline-flex items-center">{row[keyValue.key]}</span>
      )}
    </td>
  );
};
export default TableData;
