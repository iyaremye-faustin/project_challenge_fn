import React, { useState } from 'react';
import InputField from '../reusable/InputField';
import SelectField from '../reusable/SelectField';

const AddProduct = ({ closeModal, updateFormData, handleRegister }) => {
  return (
    <div className="w-screen h-[100vh] bg-main/30 flex flex-col gap-2 top-0 absolute  items-center justify-center">
      <div className=" w-1/2 bg-white rounded-[12px] p-4 items-start flex flex-col gap-4">
        <>
          <div className="flex flex-row justify-between w-full">
            <h1 className="text-[18px] font-[600]">Add Fetilizer</h1>
            <div onClick={closeModal} className="cursor-pointer">
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.5"
                  d="M12 22.5C17.5228 22.5 22 18.0228 22 12.5C22 6.97715 17.5228 2.5 12 2.5C6.47715 2.5 2 6.97715 2 12.5C2 18.0228 6.47715 22.5 12 22.5Z"
                  stroke="#1C274C"
                  strokeWidth="1.5"
                />
                <path
                  d="M14.5 10L9.50002 15M9.5 10L14.5 15"
                  stroke="#1C274C"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
          <form className="flex flex-col gap-2 w-full " onSubmit={handleRegister}>
            <div className="flex flex-row gap-4">
              <div className="flex flex-col items-start gap-1 w-1/2">
                <span className="text-[16px] font-[300] text-main">Product Category</span>
                <SelectField
                  handleChange={updateFormData}
                  id={'fertilizer_id'}
                  name={'fertilizer_id'}
                  type={'Fertilizer'}
                  isRequired={true}
                  selectOptions={[{ key: 'fertilizer', value: '1' }]}
                  selectType={'Select Fertilizer'}
                  classname={'p-3 bg-background rounded-[8px] font-[300] outline-none w-full'}
                />
              </div>
              <div className="flex flex-col items-start gap-1 w-1/2">
                <span className="text-[16px] font-[300] text-main">LastName</span>
                <InputField
                  handleChange={updateFormData}
                  id={'lastName'}
                  name={'lastName'}
                  type={'text'}
                  isRequired={true}
                  placeholder={'Enter lastname'}
                  classname={'p-3 bg-background rounded-[8px] font-[300] outline-none w-full'}
                />
              </div>
            </div>
            <div className="flex flex-row gap-4">
              <div className="flex flex-col items-start gap-1 w-1/2">
                <span className="text-[16px] font-[300] text-main">Phone Number</span>
                <InputField
                  handleChange={updateFormData}
                  id={'phoneNumber'}
                  name={'phoneNumber'}
                  type={'text'}
                  isRequired={true}
                  placeholder={'Enter telephone'}
                  classname={'p-3 bg-background rounded-[8px] font-[300] outline-none  w-full'}
                />
              </div>
              <div className="flex flex-col items-start gap-1 w-1/2">
                <span className="text-[16px] font-[300] text-main">Email Address</span>
                <InputField
                  handleChange={updateFormData}
                  id={'email'}
                  name={'email'}
                  type={'text'}
                  isRequired={true}
                  placeholder={'Enter Email address'}
                  classname={'p-3 bg-background rounded-[8px] font-[300] outline-none w-full'}
                />
              </div>
            </div>
            <div className="flex flex-row gap-4">
              <div className="flex flex-col items-start gap-1 w-1/2">
                <span className="text-[16px] font-[300] text-main">Date of birth</span>
                <InputField
                  handleChange={updateFormData}
                  id={'dateOfBirth'}
                  name={'dateOfBirth'}
                  type={'date'}
                  isRequired={true}
                  placeholder={''}
                  classname={'p-3 bg-background rounded-[8px] font-[300] outline-none w-full'}
                />
              </div>
            </div>
            <div className="flex flex-row gap-4">
              <div className="flex flex-col items-start gap-1 w-1/2">
                <span className="text-[16px] font-[300] text-main">Password</span>
                <InputField
                  handleChange={updateFormData}
                  id={'password'}
                  name={'password'}
                  type={'text'}
                  isRequired={true}
                  placeholder={'Enter Password'}
                  classname={'p-3 bg-background rounded-[8px] font-[300] outline-none  w-full'}
                />
              </div>
            </div>
            <button className="p-3 rounded-[8px] bg-main text-white">Submit</button>
          </form>
        </>
      </div>
    </div>
  );
};

export default AddProduct;
