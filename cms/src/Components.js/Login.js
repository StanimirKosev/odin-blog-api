import React, { useState } from "react";

export const Login = ({ handleLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="main">
      <div className="main-container">
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
          <button onClick={(e) => handleLogin(e, username, password)}>
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};
