import React from "react";

const RadioGroup = ({ label, name, option }) => {
  return (
    <div className="radio-group">
      <label>{label}</label>
      {option.map((opt, idx) => (
        <label key={idx}>
          <input type="radio" name={name} value={opt} required /> {opt}
        </label>
      ))}
    </div>
  );
};

export default RadioGroup;
