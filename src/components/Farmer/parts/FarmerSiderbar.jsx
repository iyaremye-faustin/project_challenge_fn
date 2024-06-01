import React, { useState } from 'react';
import logo from '../../../assets/images/logo.svg';
import { useLocation } from 'react-router-dom';
import { farmerMenu } from '../../constants/menu';

const FarmerSiderbar = () => {
  const location = useLocation();
  const [openMenu, setOpenMenu] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);
  return (
    <div className="flex flex-col gap-[32px] h-[100vh] items-start  p-6 bg-main bg-red-500 w-full fixed">
      <div className="w-[100px]">
        <img src={logo} alt="" className="w-full" />
      </div>

      <div className="flex flex-col items-start gap-2">
        {farmerMenu.map((item, index) => {
          return (
            <div className="flex flex-col items-start min-w-[200px]" key={index}>
              <a
                key={index}
                onClick={() => {}}
                href={item.url}
                className={` ${
                  item.url === location.pathname
                    ? 'bg-white rounded-[4px] text-main'
                    : 'text-white '
                } p-2    flex flex-row items-center gap-2 hover:opacity-75 w-full`}
              >
                <div>{item.icon}</div>
                <span className="font-[300] text-[16px]">{item.name}</span>
                {item.link ? (
                  <div className={`${openMenu && 'rotate-180 transition-all duration-500'}`}>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.16683 12.9167L10.0002 7.08341L15.8335 12.9167"
                        stroke="#F8F8F8"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                ) : (
                  ''
                )}
              </a>
              {openMenu && openIndex === index && (
                <div className="text-white px-8 flex flex-col gap-2 items-start">
                  {item.link.map((links, index) => {
                    return (
                      <a
                        key={index}
                        href={links.url}
                        className={` ${
                          links.url === location.pathname
                            ? 'bg-white rounded-[4px] text-main'
                            : 'text-white '
                        } p-2    flex flex-row items-center gap-2 hover:opacity-75 w-full`}
                      >
                        <div>{links.icon}</div>
                        <span className="font-[300] text-[16px]">{links.name}</span>
                      </a>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FarmerSiderbar;
