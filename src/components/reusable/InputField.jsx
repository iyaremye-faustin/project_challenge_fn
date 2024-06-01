import React from 'react';

const InputField = ({
  handleChange,
  id,
  name,
  type,
  isRequired,
  placeholder,
  classname,
  preValue = '',
  value
}) => {
  return (
    <input
      onChange={handleChange}
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      required={isRequired}
      className={classname}
      defaultValue={preValue}
      value={value}
    />
  );
};
export default InputField;
