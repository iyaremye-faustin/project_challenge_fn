import React from 'react';
import { MdOutlineElectricBolt } from "react-icons/md";

const Spinnar = () => {
  return (
    <div className='w-full flex flex-col gap-[40px] h-[100vh] justify-center items-center'>
   <div className="flex items-center justify-center">
    <div className="relative">
        <div className="h-24 w-24 rounded-full border-t-8 border-b-8 border-blue"></div>
        <div className="absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-blue-500 animate-spin">
        </div>
        <div className='absolute top-8 left-6'>
        <MdOutlineElectricBolt size={22} color='black'/>
        </div>
    </div>
</div>
    </div>
  );
};

export default Spinnar;
