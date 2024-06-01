import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { paginationPages } from './PaginationFeature';
import useAppStore from '../../store/AppStore';

const Pagination = ({ handlePageChange }) => {
  const {dataTable,currentPage} = useAppStore((state) => state);
  const nPages = paginationPages(dataTable);
  return (
    <div className="flex  justify-end  p-2 rounded-[4px] bg-white ml-auto">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage <= 1}
          className="mx-1 px-2 py-1 rounded cursor-pointer"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.0303 4.46967C16.2966 4.73594 16.3208 5.1526 16.1029 5.44621L16.0303 5.53033L9.561 12L16.0303 18.4697C16.2966 18.7359 16.3208 19.1526 16.1029 19.4462L16.0303 19.5303C15.7641 19.7966 15.3474 19.8208 15.0538 19.6029L14.9697 19.5303L7.96967 12.5303C7.7034 12.2641 7.6792 11.8474 7.89705 11.5538L7.96967 11.4697L14.9697 4.46967C15.2626 4.17678 15.7374 4.17678 16.0303 4.46967Z"
              fill="black"
            />
          </svg>
        </button>

        {Array.from({ length: nPages }, (_, index) =>
          (index >= currentPage - 1 && index <= currentPage + 1) || index === nPages - 1 ? (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={`mx-1 px-3 py-1  rounded cursor-pointer ${
                currentPage === index + 1 ? 'bg-[#EDFBFF] text-[#37C9EE]' : ''
              }`}
            >
              {index + 1}
            </button>
          ) : null
        )}

        <button
          onClick={() => {}}
          disabled={currentPage >= nPages}
          className="mx-1 px-2 py-1 rounded cursor-pointer"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.96967 19.5303C7.7034 19.2641 7.6792 18.8474 7.89705 18.5538L7.96967 18.4697L14.439 12L7.96967 5.53033C7.7034 5.26406 7.6792 4.8474 7.89705 4.55379L7.96967 4.46967C8.23594 4.2034 8.6526 4.1792 8.94621 4.39705L9.03033 4.46967L16.0303 11.4697C16.2966 11.7359 16.3208 12.1526 16.1029 12.4462L16.0303 12.5303L9.03033 19.5303C8.73744 19.8232 8.26256 19.8232 7.96967 19.5303Z"
              fill="black"
            />
          </svg>
        </button>
      </div>
  );
};
Pagination.propTypes = {
  setCurrentPageNumber: PropTypes.func
};

Pagination.defaultProps = {
  setCurrentPageNumber: () => {}
};

export default Pagination;
