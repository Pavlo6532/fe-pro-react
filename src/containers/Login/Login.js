import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import rozetkaSVG from "../../assets/rozetka.svg";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import Card from "../../components/Card/Card";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    setUsernameError("");
    setPasswordError("");
    setErrorMessage("");

    if (!username) {
      setUsernameError("Username cannot be empty");
    }
    if (!password) {
      setPasswordError("Password cannot be empty");
    }

    if (!username || !password) {
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.token);
        navigate("/productstable");
      } else {
        setErrorMessage("Invalid username or password");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    setUsernameError("");
    setErrorMessage("");
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError("");
    setErrorMessage("");
  };

  return (
    <Card>
      <img src={rozetkaSVG} alt="Logo" className="logo-home" />
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <Input
            type="text"
            placeholder="User name"
            value={username}
            onChange={handleUsernameChange}
            errorMessage={usernameError}
          />
        </div>
        <div className="form-group">
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            errorMessage={passwordError}
          />
        </div>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <Button type="submit">Login</Button>
      </form>
    </Card>
  );
};

export default Login;
