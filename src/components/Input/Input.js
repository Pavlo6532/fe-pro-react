import React, { useState } from "react";
import "./Input.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Input = ({ type, placeholder, value, onChange, errorMessage }) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div
      className={`input-container ${
        errorMessage ? "error-form-group" : "input-form-group"
      }`}
    >
      <input
        type={showPassword ? "text" : type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="input-field"
      />
      {type === "password" && (
        <div className="eye-icon" onClick={toggleShowPassword}>
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </div>
      )}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
};

export default Input;
