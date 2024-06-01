import React from 'react'
import FarmerSiderbar from '../components/Farmer/parts/FarmerSiderbar'
import AdminTopBar from '../components/admin/parts/AdminTopBar'
import { Outlet } from 'react-router-dom'

const Farmer=()=> {
  return (
    <div className="flex flex-row w-full  ">
      <div className="w-1/5">
        <FarmerSiderbar />
      </div>
      <div className="w-4/5 flex flex-col items-start gap-2 realtive">
        <div className="h-[10vh] z-40 w-full relative ">
          <AdminTopBar />
        </div>
        <div className="w-full relative min-h-[85vh]   bg-background flex flex-col pb-10">
          <div className="w-full px-2 mt-5 pb-2">
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
  )
}

export default Farmer