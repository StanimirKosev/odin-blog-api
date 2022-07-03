import React from "react";

export const Header = ({ user }) => {
  return (
    <header>
      <div>
        <a className="logo" href="/">
          Stanimir's Blog Editor
        </a>
      </div>
      <div>
        <button>Log in</button>
      </div>
    </header>
  );
};
