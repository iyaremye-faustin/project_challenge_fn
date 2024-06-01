import React from 'react';

const FarmerHome = () => {
  const analytics = [
    {
      name: 'Fertilizers',
      total: 104,
      percantange: '5.0',
      time: 'Than Last Month',
      icon: (
        <svg
          width="20"
          height="21"
          viewBox="0 0 20 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.4"
            d="M14.9984 6.46666C14.9484 6.45832 14.8901 6.45832 14.8401 6.46666C13.6901 6.42499 12.7734 5.48332 12.7734 4.31666C12.7734 3.12499 13.7318 2.16666 14.9234 2.16666C16.1151 2.16666 17.0734 3.13332 17.0734 4.31666C17.0651 5.48332 16.1484 6.42499 14.9984 6.46666Z"
            stroke="#292D32"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity="0.4"
            d="M14.1396 12.5335C15.2813 12.7252 16.5396 12.5252 17.423 11.9335C18.598 11.1502 18.598 9.86682 17.423 9.08349C16.5313 8.49179 15.2563 8.29179 14.1146 8.49179"
            stroke="#292D32"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity="0.4"
            d="M4.97209 6.46666C5.02209 6.45832 5.08043 6.45832 5.13043 6.46666C6.28043 6.42499 7.19709 5.48332 7.19709 4.31666C7.19709 3.12499 6.23876 2.16666 5.04709 2.16666C3.85543 2.16666 2.89709 3.13332 2.89709 4.31666C2.90543 5.48332 3.82209 6.42499 4.97209 6.46666Z"
            stroke="#292D32"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity="0.4"
            d="M5.83121 12.5335C4.68954 12.7252 3.43121 12.5252 2.54788 11.9335C1.37288 11.1502 1.37288 9.86682 2.54788 9.08349C3.43954 8.49179 4.71454 8.29179 5.85621 8.49179"
            stroke="#292D32"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10 12.6918C9.95004 12.6835 9.89171 12.6835 9.84171 12.6918C8.69171 12.6502 7.77502 11.7085 7.77502 10.5418C7.77502 9.35017 8.73337 8.39185 9.92504 8.39185C11.1167 8.39185 12.075 9.3585 12.075 10.5418C12.0667 11.7085 11.15 12.6585 10 12.6918Z"
            stroke="#292D32"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.57559 15.317C6.40059 16.1003 6.40059 17.3836 7.57559 18.1669C8.90892 19.0586 11.0923 19.0586 12.4256 18.1669C13.6006 17.3836 13.6006 16.1003 12.4256 15.317C11.1006 14.4337 8.90892 14.4337 7.57559 15.317Z"
            stroke="#292D32"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    },
    {
      name: 'Seeds',
      total: '10 000 000',
      percantange: '5.0',
      time: 'Than Last Month',
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.6666 1.66666C13.3333 1.66666 14.1666 2.50832 14.1666 4.19166V10.0667C14.1666 11.725 12.9916 12.3667 11.5499 11.5L10.4499 10.8333C10.1999 10.6833 9.79992 10.6833 9.54992 10.8333L8.44992 11.5C7.00825 12.3667 5.83325 11.725 5.83325 10.0667V4.19166C5.83325 2.50832 6.66659 1.66666 8.33325 1.66666H11.6666Z"
            stroke="#292D32"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity="0.4"
            d="M5.68341 4.1583C2.84175 4.6333 1.66675 6.3833 1.66675 9.91667V12.4417C1.66675 16.65 3.33341 18.3333 7.50008 18.3333H12.5001C16.6667 18.3333 18.3334 16.65 18.3334 12.4417V9.91667C18.3334 6.32497 17.1167 4.56663 14.1667 4.1333"
            stroke="#292D32"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    },
    {
      name: 'Orders Submitted',
      total: '18 000',
      percantange: '5.0',
      time: 'Than Last Month',
      icon: (
        <svg
          width="20"
          height="21"
          viewBox="0 0 20 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.4"
            d="M10.0001 7.0751L9.10838 8.6251C8.90838 8.96674 9.07505 9.25007 9.46672 9.25007H10.5251C10.9251 9.25007 11.0834 9.5334 10.8834 9.87507L10.0001 11.4251"
            stroke="black"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6.91696 15.5335V14.5668C5.00029 13.4085 3.42529 11.1502 3.42529 8.75016C3.42529 4.62516 7.21696 1.39182 11.5003 2.32516C13.3837 2.74182 15.0337 3.99182 15.892 5.71682C17.6337 9.21684 15.8003 12.9335 13.1087 14.5585V15.5252C13.1087 15.7668 13.2003 16.3252 12.3087 16.3252H7.71696C6.80029 16.3335 6.91696 15.9752 6.91696 15.5335Z"
            stroke="black"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity="0.4"
            d="M7.08325 18.8335C8.99159 18.2918 11.0083 18.2918 12.9166 18.8335"
            stroke="black"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    }
  ];
  return (
    <div className="flex flex-col gap-2 items-start w-full">
      <div className="grid grid-cols-3 gap-3 w-full">
        {analytics.map((item, index) => {
          return (
            <div className="rounded-[12px] bg-white p-4 flex flex-col  items-start" key={index}>
              <h1 className="text-[16px]">{item.name}</h1>
              <div className="flex flex-row justify-between items-center w-full">
                <span className="text-[28px] font-[600]">{item.total}</span>
                <div className="p-2 bg-background rounded-[8px]">{item.icon}</div>
              </div>
              <div className="flex flex-row items-center gap-2">
                <span className="text-[16px] font-[400] text-red">+{item.percantange}%</span>
                <span className="text-[16px] font-[300] text-semiText">Than last month</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FarmerHome;
