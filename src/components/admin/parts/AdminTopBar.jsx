import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Profile from '../../Modals/Profile';
import useAppStore from '../../store/AppStore';
import { todayDate } from '../../../utils/helpers';
import { isLoggedIn } from '../../../api/auth';

const AdminTopBar = () => {
  const [today, setDay] = useState(todayDate());
  const [profile, setProfile] = useState(false);
  const modalRef = useRef(null);
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const { user, setUser, loading, setLoading, cartItems, setCartItems } = useAppStore(
    (state) => state
  );

  const navigate = useNavigate();
  const handleOutsideClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setProfile(false);
    }
  };

  const validChecking = async () => {
    setLoading(true);
    const { status, user } = await isLoggedIn();
    if (!status) {
      navigate('/');
    }
    setUser(user);
    setName(user.fullName);
    setRole(user.role);
    setDay(todayDate());
    setLoading(false);
  };
  const reviewOrder =()=>{
    if (cartItems.length) {
      navigate('/farmer/order/review');
    }
  }

  useEffect(() => {
    validChecking();
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <div className="w-4/5  flex flex-row justify-between p-2 bg-white fixed h-[12vh] z-20 ">
      <div className="flex flex-row gap-3 items-center">
        <div>
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.3579 2.34375C8.44358 2.34373 6.92729 2.34372 5.74061 2.50327C4.51934 2.66746 3.53085 3.01342 2.7513 3.79296C1.97176 4.57251 1.6258 5.561 1.46161 6.78227C1.30206 7.96895 1.30207 9.48523 1.30209 11.3996V13.6004C1.30207 15.5148 1.30206 17.031 1.46161 18.2177C1.6258 19.439 1.97176 20.4275 2.7513 21.2071C3.53085 21.9866 4.51934 22.3325 5.74061 22.4968C6.92728 22.6562 8.44355 22.6562 10.3579 22.6562H14.6421C14.9694 22.6562 15.2852 22.6562 15.5896 22.6554C15.6014 22.6559 15.6131 22.6562 15.625 22.6562C15.6384 22.6562 15.6518 22.6559 15.665 22.6552C17.1067 22.6508 18.2924 22.6268 19.2594 22.4968C20.4806 22.3325 21.4692 21.9866 22.2488 21.2071C23.0282 20.4275 23.3742 19.439 23.5384 18.2177C23.6979 17.031 23.6979 15.5148 23.6979 13.6005V11.3996C23.6979 9.48526 23.6979 7.96894 23.5384 6.78227C23.3742 5.561 23.0282 4.57251 22.2488 3.79296C21.4692 3.01342 20.4806 2.66746 19.2594 2.50327C18.2924 2.37326 17.1067 2.3492 15.665 2.34475C15.6518 2.34408 15.6384 2.34375 15.625 2.34375C15.6131 2.34375 15.6014 2.34401 15.5896 2.34454C15.2851 2.34375 14.9695 2.34375 14.6421 2.34375H10.3579ZM14.8438 3.90627C14.758 3.90625 14.6713 3.90625 14.5833 3.90625H10.4167C8.43041 3.90625 7.01929 3.90791 5.94881 4.05183C4.9008 4.19274 4.297 4.45697 3.85616 4.89781C3.41531 5.33866 3.15108 5.94246 3.01018 6.99047C2.86625 8.06095 2.86459 9.47206 2.86459 11.4583V13.5417C2.86459 15.5279 2.86625 16.9391 3.01018 18.0096C3.15108 19.0575 3.41531 19.6614 3.85616 20.1022C4.297 20.543 4.9008 20.8073 5.94881 20.9481C7.01929 21.0921 8.43041 21.0938 10.4167 21.0938H14.5833C14.6713 21.0938 14.758 21.0938 14.8438 21.0938V3.90627ZM16.4063 21.0878C17.4829 21.0765 18.3419 21.0435 19.0513 20.9481C20.0992 20.8073 20.703 20.543 21.1439 20.1022C21.5847 19.6614 21.849 19.0575 21.9898 18.0096C22.1338 16.9391 22.1354 15.5279 22.1354 13.5417V11.4583C22.1354 9.47206 22.1338 8.06095 21.9898 6.99047C21.849 5.94246 21.5847 5.33866 21.1439 4.89781C20.703 4.45697 20.0992 4.19274 19.0513 4.05183C18.3419 3.95647 17.4829 3.92356 16.4063 3.91222V21.0878Z"
              fill="#1C274C"
            />
          </svg>
        </div>
        <div className="flex flex-col  items-start">
          <h1 className="text-[16px] text-main font-[400]">
            <span className="font-[500]"> Welcome Back!</span> {name}
          </h1>
          <div className="flex flex-row items-center gap-2 text-[14px]">
            <span className=" text-semiText font-[300] text-[14px] ">{today}</span>
            <span className="text-semiText font-[300] text-[14px]"></span>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center gap-3">
        <div className="flex flex-row items-center gap-3 cursor-pointer" onClick={reviewOrder}>
          <div className="relative p-2 rounded-[12px] bg-background">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 4H3C2.44772 4 2 4.44772 2 5C2 5.55228 2.44772 6 3 6H4.18365L6.05942 14.5635C6.19313 15.1784 6.74555 15.6341 7.37379 15.6341H18.8614C19.4696 15.6341 20.0012 15.1967 20.152 14.597L21.8479 7.59701C21.9721 7.08911 21.5624 6.6341 21.0418 6.6341H6.27248L5.74156 4H7ZM6.51765 8.6341H19.0418L17.7894 13.6341H7.95964L6.51765 8.6341Z"
                fill="black"
              />
              <path
                d="M10 18C9.44772 18 9 18.4477 9 19C9 19.5523 9.44772 20 10 20C10.5523 20 11 19.5523 11 19C11 18.4477 10.5523 18 10 18Z"
                fill="black"
              />
              <path
                d="M17 18C16.4477 18 16 18.4477 16 19C16 19.5523 16.4477 20 17 20C17.5523 20 18 19.5523 18 19C18 18.4477 17.5523 18 17 18Z"
                fill="black"
              />
            </svg>
            {cartItems.length > 0 && (
              <span className="absolute top-0 right-0 ml-3 bg-main text-white text-md rounded-full w-5 h-5 flex items-center justify-center">
                {cartItems.length}
              </span>
            )}
          </div>
        </div>
        <div
          className="flex flex-row items-center gap-3 cursor-pointer"
          onClick={() => setProfile(!profile)}
        >
          <div className="p-1 px-2 rounded-[12px]  flex flex-row items-center gap-2 bg-background">
            <div className="p-2 py-3 rounded-[12px]  bg-blue">
              <svg
                width="21"
                height="13"
                viewBox="0 0 21 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="" fill="#0685A5" />
              </svg>
            </div>
            <div className="flex flex-col items-start gap-[-4px]">
              <h1 className="text-[16px] text-main font-[400]">{!loading && name}</h1>
              <span className="text-[14px] text-semiText font-[300]">{!loading && role}</span>
            </div>
            <div>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.72475 6.6414C3.94663 6.41951 4.29385 6.39934 4.53853 6.58089L4.60863 6.6414L10 12.0325L15.3914 6.6414C15.6133 6.41951 15.9605 6.39934 16.2052 6.58089L16.2753 6.6414C16.4972 6.86329 16.5174 7.21051 16.3358 7.45519L16.2753 7.52529L10.442 13.3586C10.2201 13.5805 9.87285 13.6007 9.62818 13.4191L9.55808 13.3586L3.72475 7.52529C3.48067 7.28121 3.48067 6.88548 3.72475 6.6414Z"
                  fill="black"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div
        className={` w-full flex justify-end z-40    fixed ${
          profile ? 'right-0' : 'right-[-2000px]'
        } transition-all duration-900 h-[100vh] top-0 w-full bg-main/10 p-2 `}
      >
        <div className="w-1/5" ref={modalRef}>
          {!loading && <Profile user={user} />}
        </div>
      </div>
    </div>
  );
};

export default AdminTopBar;
