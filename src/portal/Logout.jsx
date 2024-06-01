import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      localStorage.removeItem('farm_sys_token');
      sessionStorage.removeItem('farm_sys_token');
      navigate('/');
    } catch (error) {
      return error;
    }
    navigate('/login');
  };
  useEffect(() => {
    handleLogout();
  }, []);
  return <div className="flex flex-col justify-center ml-24 w-96"></div>;
};
export default Logout;
