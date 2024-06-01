import React from 'react';

const ProfileHeader = () => {
  const links = [
    {
      name: 'Overview',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M10 4.63342H18.3333"
            stroke="#A883BA"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11.85 1.66663H16.4833C17.9667 1.66663 18.3333 2.03329 18.3333 3.49996V6.92496C18.3333 8.39163 17.9667 8.75829 16.4833 8.75829H11.85C10.3667 8.75829 10 8.39163 10 6.92496V3.49996C10 2.03329 10.3667 1.66663 11.85 1.66663Z"
            stroke="#A883BA"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M1.66666 14.2168H10"
            stroke="#A883BA"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3.51666 11.25H8.15C9.63333 11.25 10 11.6167 10 13.0833V16.5083C10 17.975 9.63333 18.3417 8.15 18.3417H3.51666C2.03333 18.3417 1.66666 17.975 1.66666 16.5083V13.0833C1.66666 11.6167 2.03333 11.25 3.51666 11.25Z"
            stroke="#A883BA"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18.3333 12.5C18.3333 15.725 15.725 18.3333 12.5 18.3333L13.375 16.875"
            stroke="#A883BA"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M1.66666 7.49996C1.66666 4.27496 4.275 1.66663 7.5 1.66663L6.62501 3.12496"
            stroke="#A883BA"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    },
    {
      name: 'Transactions',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M6.66667 1.66663V4.16663"
            stroke="#8A8A8A"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13.3333 1.66663V4.16663"
            stroke="#8A8A8A"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2.91667 7.57495H17.0833"
            stroke="#8A8A8A"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17.5 7.08329V14.1666C17.5 16.6666 16.25 18.3333 13.3333 18.3333H6.66667C3.75 18.3333 2.5 16.6666 2.5 14.1666V7.08329C2.5 4.58329 3.75 2.91663 6.66667 2.91663H13.3333C16.25 2.91663 17.5 4.58329 17.5 7.08329Z"
            stroke="#8A8A8A"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13.0789 11.4166H13.0868"
            stroke="#8A8A8A"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13.0789 13.9166H13.0868"
            stroke="#8A8A8A"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.99625 11.4166H10.0041"
            stroke="#8A8A8A"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.99625 13.9166H10.0041"
            stroke="#8A8A8A"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6.91192 11.4166H6.91979"
            stroke="#8A8A8A"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6.91192 13.9166H6.91979"
            stroke="#8A8A8A"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    },
    {
      name: 'Google map',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M18.3333 7.49998V12.5C18.3333 14.5833 17.9167 16.0416 16.9833 16.9833L11.6667 11.6666L18.1083 5.22498C18.2583 5.88331 18.3333 6.63331 18.3333 7.49998Z"
            stroke="#B6B6B6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18.1083 5.22496L5.225 18.1083C2.71666 17.5333 1.66667 15.8 1.66667 12.5V7.49996C1.66667 3.33329 3.33334 1.66663 7.5 1.66663H12.5C15.8 1.66663 17.5333 2.71663 18.1083 5.22496Z"
            stroke="#B6B6B6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16.9829 16.9833C16.0413 17.9166 14.5829 18.3333 12.4996 18.3333H7.49962C6.63295 18.3333 5.88294 18.2583 5.22461 18.1083L11.6663 11.6666L16.9829 16.9833Z"
            stroke="#B6B6B6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity="0.4"
            d="M5.19941 6.65022C5.76608 4.20855 9.43275 4.20855 9.99942 6.65022C10.3244 8.08355 9.42442 9.30021 8.63275 10.0502C8.05773 10.6002 7.14942 10.6002 6.56609 10.0502C5.77442 9.30021 4.86608 8.08355 5.19941 6.65022Z"
            stroke="#B6B6B6"
          />
          <path
            opacity="0.4"
            d="M7.57843 7.25012H7.58591"
            stroke="#B6B6B6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    },
    {
      name: 'Vendor info',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M9.99999 18.3333C14.5833 18.3333 18.3333 14.5833 18.3333 9.99996C18.3333 5.41663 14.5833 1.66663 9.99999 1.66663C5.41666 1.66663 1.66666 5.41663 1.66666 9.99996C1.66666 14.5833 5.41666 18.3333 9.99999 18.3333Z"
            stroke="#777777"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity="0.34"
            d="M10 6.66663V10.8333"
            stroke="#777777"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity="0.34"
            d="M9.99509 13.3334H10.0026"
            stroke="#777777"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    },
    {
      name: 'Setting',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M7.50002 18.3333H12.5C16.6667 18.3333 18.3334 16.6666 18.3334 12.5V7.49996C18.3334 3.33329 16.6667 1.66663 12.5 1.66663H7.50002C3.33335 1.66663 1.66669 3.33329 1.66669 7.49996V12.5C1.66669 16.6666 3.33335 18.3333 7.50002 18.3333Z"
            stroke="#767676"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g opacity="0.4">
            <path
              d="M12.9752 15.4164V12.1664"
              stroke="#767676"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.9752 6.20837V4.58337"
              stroke="#767676"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.9748 10.5418C14.1714 10.5418 15.1414 9.57175 15.1414 8.37516C15.1414 7.17855 14.1714 6.2085 12.9748 6.2085C11.7782 6.2085 10.8081 7.17855 10.8081 8.37516C10.8081 9.57175 11.7782 10.5418 12.9748 10.5418Z"
              stroke="#767676"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7.02472 15.4165V13.7915"
              stroke="#767676"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7.02472 7.83337V4.58337"
              stroke="#767676"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7.02507 13.7913C8.22168 13.7913 9.19175 12.8213 9.19175 11.6247C9.19175 10.4281 8.22168 9.45801 7.02507 9.45801C5.82845 9.45801 4.8584 10.4281 4.8584 11.6247C4.8584 12.8213 5.82845 13.7913 7.02507 13.7913Z"
              stroke="#767676"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </svg>
      )
    }
  ];
  return (
    <div className="flex flex-row gap-2 w-full py-2 bg-white rounded-[12px]">
      {links.map((item, index) => {
        return (
          <div className="flex flex-row items-center gap-2 py-2 pl-4 cursor-pointer" key={index}>
            <div>{item.icon}</div>
            <span>{item.name}</span>
          </div>
        );
      })}
    </div>
  );
};

export default ProfileHeader;
