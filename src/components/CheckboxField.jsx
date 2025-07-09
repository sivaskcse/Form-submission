import React from "react";

const CheckboxField = ({ label, name, value }) => {
  return (
    <div className="checkbox-field">
      <label>
        <input type="checkbox" name={name} value={value} required /> {label}
      </label>
    </div>
  );
};

export default CheckboxField;
