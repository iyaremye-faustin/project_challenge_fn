import React, { useState } from 'react';
import logo from '../assets/images/logo.svg';
import authImage from '../assets/images/Frame 271.png';
import InputField from '../components/reusable/InputField';
import SelectField from '../components/reusable/SelectField';
import { authRegister } from '../api/auth';

const Register = () => {
  const [formData, setFormData] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    await authRegister(formData);
  };
  return (
    <div className="w-full h-[100vh] flex flex-row ">
      <div className="w-1/2 h-full relative items-start">
        <div className="flex flex-col w-full h-full absolute">
          <img src={authImage} className="w-full h-full object-cover" alt="" />
        </div>
        <div className="w-[100px] mx-auto relative my-[30vh]">
          <img src={logo} className="w-full" alt="" />
        </div>
        <div className="relative bottom-0 z-40 w-full items-start flex flex-col px-20">
          <h1 className="text-white text-[24px]">Crop Production seed-fertilizer management</h1>
          <span className="text-semiText text-start text-[14px]">
            Powering Your Agriculture, Empowering Your Future
          </span>
        </div>
      </div>
      <div className="w-1/2 h-full relative  flex flex-col gap-5  items-center justify-center">
        <form className="flex flex-col gap-2 w-[500px] " onSubmit={handleRegister}>
          <div className="flex flex-col items-start">
            <h1 className="text-[24px] font-[700]">Create Account</h1>
          </div>
          <div className="flex flex-row gap-4">
            <div className="flex flex-col items-start gap-1">
              <span className="text-[16px] font-[300] text-main">FirstName</span>
              <InputField
                handleChange={handleChange}
                id={'names'}
                name={'names'}
                type={'text'}
                isRequired={true}
                placeholder={'Enter your fullname'}
                classname={'p-3 bg-background rounded-[8px] font-[300] outline-none  w-full'}
              />
            </div>
            <div className="flex flex-col items-start gap-1">
              <span className="text-[16px] font-[300] text-main">Email Address</span>
              <InputField
                handleChange={handleChange}
                id={'email'}
                name={'email'}
                type={'text'}
                isRequired={true}
                placeholder={'Enter Your Email address'}
                classname={'p-3 bg-background rounded-[8px] font-[300] outline-none  w-[240px]'}
              />
            </div>
          </div>
          <div className="flex flex-row gap-4">
            <div className="flex flex-col items-start gap-1">
              <span className="text-[16px] font-[300] text-main">Phone Number</span>
              <InputField
                handleChange={handleChange}
                id={'telephone'}
                name={'telephone'}
                type={'text'}
                isRequired={true}
                placeholder={'Enter your telephone'}
                classname={'p-3 bg-background rounded-[8px] font-[300] outline-none  w-full'}
              />
            </div>
            <div className="flex flex-col items-start gap-1">
              <span className="text-[16px] font-[300] text-main">ID/Passport Number</span>
              <InputField
                handleChange={handleChange}
                id={'idpassportnumber'}
                name={'idpassportnumber'}
                type={'text'}
                isRequired={true}
                placeholder={'Enter your Id Number'}
                classname={'p-3 bg-background rounded-[8px] font-[300] outline-none  w-[240px]'}
              />
            </div>
          </div>
          <div className="flex flex-row gap-4">
            <div className="flex flex-col items-start gap-1">
              <span className="text-[16px] font-[300] text-main">Username</span>
              <InputField
                handleChange={handleChange}
                id={'username'}
                name={'username'}
                type={'text'}
                isRequired={true}
                placeholder={'Enter username'}
                classname={'p-3 bg-background rounded-[8px] font-[300] outline-none w-full'}
              />
            </div>
            <div className="flex flex-col items-start gap-1">
              <span className="text-[16px] font-[300] text-main">Password</span>
              <InputField
                handleChange={handleChange}
                id={'password'}
                name={'password'}
                type={'password'}
                isRequired={true}
                placeholder={'Enter Password'}
                classname={'p-3 bg-background rounded-[8px] font-[300] outline-none w-full'}
              />
            </div>
          </div>
          <button className="p-3 rounded-[8px] bg-main text-white">Sign Up</button>
          <span className="text-[14px] font-[400] text-main">
            Already Have Account?{' '}
            <a href="/" className="font-[600]">
              Login
            </a>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Register;
