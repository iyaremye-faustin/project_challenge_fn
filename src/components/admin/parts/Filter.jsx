import React, { useState } from 'react';

const Filter = ({ title, url, number, openCloseModal, otherButton }) => {
  return (
    <>
      <div className="p-4 bg-white flex flex-row justify-between rounded-[12px]">
        <div className="flex flex-row gap-2 items-center">
          <h1>{title}</h1>
          <div className="py-2 px-4 bg-background rounded-[4px]">
            <span className="text-semiText font-[300] text-[16px]">{number}</span>
          </div>
        </div>
        <div className="flex flex-row gap-4">
          <div className="py-2 px-4 cur border-semiText border-[1.3px] flex flex-row gap-2 items-center rounded-[8px] cursor-pointer">
            <div>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2.5 5.83325H17.5" stroke="lightgray" strokeLinecap="round" />
                <path d="M5 10H15" stroke="lightgray" strokeLinecap="round" />
                <path d="M8.3335 14.1667H11.6668" stroke="lightgray" strokeLinecap="round" />
              </svg>
            </div>
            <span className="text-[14px] text-semiText">Filter</span>
          </div>
          {url === 'products' && (
            <div className="flex gap-2">
              <div
                onClick={openCloseModal}
                className="py-2 px-4 rounded-[8px] bg-main cursor-pointer hover:opacity-80 transition-all flex flex-row gap-2 items-center"
              >
                <span className="text-[14px] text-white font-[300]">Add Fertilizer</span>
                <span className="text-[18px] text-white font-[300]">+</span>
              </div>
              <div
                onClick={otherButton}
                className="py-2 px-4 rounded-[8px] bg-main cursor-pointer hover:opacity-80 transition-all flex flex-row gap-2 items-center"
              >
                <span className="text-[14px] text-white font-[300]">Add Seed Product</span>
                <span className="text-[18px] text-white font-[300]">+</span>
              </div>
            </div>
          )}

          {url === 'orders' && (
            <div className="flex gap-2">
              <div
                onClick={otherButton}
                className="py-2 px-4 rounded-[8px] bg-main cursor-pointer hover:opacity-80 transition-all flex flex-row gap-2 items-center"
              >
                <span className="text-[14px] text-white font-[300]">New Order</span>
                <span className="text-[18px] text-white font-[300]">+</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Filter;
