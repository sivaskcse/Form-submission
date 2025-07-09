import React from "react";

const InputField = ({ label, name, type, placeholder }) => {
  return (
    <div className="input-field">
      <label>{label}</label>
      <input type={type} name={name} placeholder={placeholder} required />
    </div>
  );
};

export default InputField;
