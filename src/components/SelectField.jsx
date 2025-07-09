import React from "react";

const SelectField = ({ name, option }) => {
  return (
    <div className="select-field">
      <label>Select Gender</label>
      <select name={name} required>
        <option value="">Select Gender</option>
        {option.map((opt, idx) => (
          <option value={opt} key={idx}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectField;
