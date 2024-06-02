import React from 'react';

const Button = ({ classStyles, name, value = 'Button', type = 'button', handler }) => {
  return (
    <button className={classStyles} name={name} onClick={handler} type={type}>
      {value}
    </button>
  );
};
export default Button;
