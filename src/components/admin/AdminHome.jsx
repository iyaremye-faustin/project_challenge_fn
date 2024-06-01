import React,{useEffect, useState} from 'react';
import useAppStore from '../store/AppStore';


const AdminHome = () => {
  useEffect(() => {
  }, []);
  return (
    <div className="flex flex-col gap-2 items-start w-full">
      <div className="flex flex-row gap-2 w-full">
        {/* <Analytics/> */}
        <div className="w-1/2 h-full ">
          {/* <WeeklyReport /> */}
        </div>
      </div>

      <div className="w-full flex flex-row gap-2">
        <div className="w-2.5/4">
        </div>
        <div className="w-1/2">
          {/* <TopPerforming /> */}
        </div>
      </div>
      <div className="w-full flex flex-row gap-2">
        <div className="w-5/6">
          {/* <PricingStatus /> */}
        </div>
        <div className="w-1/3 bg-white rounded-[12px]"></div>
      </div>
    </div>
  );
};

export default AdminHome;
