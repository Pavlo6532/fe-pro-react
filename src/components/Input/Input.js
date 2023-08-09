import React, { useState } from "react";
import "./Input.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Input = ({ type, placeholder }) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="input-container">
      <input type={showPassword ? "text" : type} placeholder={placeholder} />
      {type === "password" && (
        <div className="eye-icon" onClick={toggleShowPassword}>
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </div>
      )}
    </div>
  );
};

export default Input;
