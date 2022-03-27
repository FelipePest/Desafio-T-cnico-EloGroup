import React from "react";


const Checkbox = ({ label, value, onChange }) => {
    return (
      <label htmlFor={label}>
        <input type="checkbox" checked={value} onChange={onChange} />
        {label}
      </label>
    );
  };

export default Checkbox;