import React from 'react';

const MultiSelectField = ({
  selectType,
  id,
  name,
  isRequired,
  classname,
  handleChange,
  selectOptions,
  selectedOptions
}) => {
  return (
    <div className="flex flex-col gap-1">
      <ul>
        {selectedOptions &&
          selectedOptions.map((option) => (
            <li key={option}>
              {option.key}
              {/* <button onClick={() => handleRemoveOption(option)}>Remove</button> */}
            </li>
          ))}
      </ul>
      <select
        id={id}
        name={name}
        className={classname}
        required={isRequired}
        onChange={handleChange}
      >
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
    </div>
  );
};

export default MultiSelectField;
