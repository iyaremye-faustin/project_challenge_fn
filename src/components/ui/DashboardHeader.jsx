import React from 'react';
const DashboardHeader = ({ headerTitle, subTitle }) => {
  return (
    <div className="flex flex-row gap-2">
      <span className="text-semiText text-[14px] font-[400]">Dashboard</span>
      <span className="text-semiText text-[14px] font-[400]">/ {headerTitle}</span>
      <span className="text-main text-[14px] font-[500]">/ {subTitle} </span>
    </div>
  );
};

export default DashboardHeader;
