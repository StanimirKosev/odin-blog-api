import React from "react";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();
  return (
    <header>
      <div>
        <a className="logo" href="/">
          Stanimir's Blog Editor
        </a>
      </div>
      <div>
        <button onClick={() => navigate("/login")}>Log in</button>
      </div>
    </header>
  );
};
