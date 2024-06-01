import React from 'react';

const SelectField = ({
  selectType,
  id,
  name,
  isRequired,
  classname,
  handleChange,
  selectOptions
}) => {
  return (
    <select id={id} name={name} className={classname} required={isRequired} onChange={handleChange}>
      <option>{selectType}</option>
      {selectOptions &&
        selectOptions.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.key}
            </option>
          );
        })}
    </select>
  );
};

export default SelectField;
