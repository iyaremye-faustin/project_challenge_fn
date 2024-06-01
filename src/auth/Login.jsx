import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { notificationErrorStyles } from '../components/constants/app';
import logo from '../assets/images/logo.svg';
import authImage from '../assets/images/Frame 271.png';
import { authLogin } from '../api/auth';
import CircleSpinnerSmall from '../components/reusable/CircleSpinnerSmall';
import useAppStore from '../components/store/AppStore';

const Login = () => {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  const { loading, setLoading } = useAppStore((state) => state);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = await authLogin(formData);
    if (res.status && res.role.includes('farmer')) {
      navigate('/farmer');
    }
    if (res.status && res.role.includes('administrator')) {
      navigate('/admin');
    } else {
      toast.error(res.message, {
        className: notificationErrorStyles
      });
    }
    setLoading(false);
  };
  

  return (
    <div className="w-full h-[100vh] flex flex-row ">
      <div className="w-1/2 h-full relative items-start">
      </div>
      <div className="w-1/2 h-full relative  flex flex-col gap-5  items-center justify-center">
        <form className="flex flex-col gap-4 w-[300px] ">
          <div className="flex flex-col items-start">
            <h1 className="text-[24px] font-[700]">Welcome Back!</h1>
          </div>
          <div className="flex flex-col items-start gap-1">
            <span className="text-[16px] font-[300] text-main">Email|Username</span>
            <input
              type="text"
              className="p-3 bg-background rounded-[8px] font-[300] outline-none  w-full "
              placeholder="Enter Email Or Username"
              name="login" 
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col items-start gap-1">
            <span className="text-[16px] font-[300] text-main">Password</span>
            <input
              type="password"
              className="p-3 bg-background rounded-[8px] font-[300] outline-none w-full "
              placeholder="Enter Your Password"
              name="password"
              onChange={handleChange}
            />
          </div>
          {!loading && (
            <button className="p-3 rounded-[8px] bg-main text-white" onClick={handleSubmit}>
              Login
            </button>
          )}
          {loading && <CircleSpinnerSmall />}
          <span className="text-[14px] font-[400] text-main">
            Don&apos;t Have Account?
            <a href="/sign-up" className="font-[600]">
              Sign Up
            </a>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Login;
