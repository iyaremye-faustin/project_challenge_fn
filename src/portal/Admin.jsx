import React from 'react';

import { Outlet } from 'react-router-dom';
import AdminTopBar from '../components/admin/parts/AdminTopBar';
import Sidebar from '../components/admin/parts/Sidebar';

const Admin = () => {
  return (
    <div className="flex flex-row w-full relative  ">
      <div className="w-1/5">
        <Sidebar />
      </div>
      <div className="w-4/5 flex flex-col items-start gap-2 realtive">
        <div className="h-[10vh] w-full relative ">
          <AdminTopBar />
        </div>
        <div className="w-full relative min-h-[85vh]   bg-background flex flex-col pb-10">
          <div className="w-full py-6  pb-2">
            <Outlet />
          </div>

          <div className=" fixed bottom-0 bg-white py-2  px-4 flex flex-row items-center justify-between w-4/5">
            <div className="flex flex-row items-center gap-2">
              <span className="text-[16px] text-semiText font-[300]">Agro-Farmer</span>
              <span className="text-[16px] text-semiText font-[300]">@2024</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
