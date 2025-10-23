import React from "react";

export function CustomCheckbox({ id, checked, onChange, label }) {
  return (
    <label className="checkbox-label custom-checkbox-wrapper">
      <input
        id={id}
        type="checkbox"
        className="native-checkbox"
        checked={checked}
        onChange={onChange}
      />
      <span className="custom-checkbox" aria-hidden="true">
        <svg
          className="checkmark"
          width="12"
          height="9"
          viewBox="0 0 12 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 4.5L4 7.5L11 1"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      {label}
    </label>
  );
}

export default CustomCheckbox;
