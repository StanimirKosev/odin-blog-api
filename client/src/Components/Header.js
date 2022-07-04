import React from "react";
import { Navigation } from "./Navigation";
import { MobileNavigation } from "./MobileNavigation";
import ReactSwitch from "react-switch";

export const Header = ({ toggleTheme, theme }) => {
  return (
    <header>
      <div className="header-container">
        <div className="container-inner">
          <div>
            <a className="logo" href="/odin-blog-api">
              Stanimir's Blog
            </a>
          </div>
          <div className="header-content-right">
            <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
            <Navigation />
            <MobileNavigation />
          </div>
        </div>
      </div>
    </header>
  );
};
