import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = ({ handleLogin, user }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  return (
    <div className="main">
      <div className="main-container">
        {user ? (
          <div>You are already logged in.</div>
        ) : (
          <form>
            <label>
              Username:
              <input
                type="text"
                name="username"
                onChange={(e) => setUsername(e.target.value)}
              />
            </label>
            <label>
              Password:{" "}
              <input
                type="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <button
              onClick={(e) => {
                handleLogin(e, username, password);
                navigate("/");
              }}
            >
              Log in
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
