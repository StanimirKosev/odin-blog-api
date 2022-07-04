import React from "react";
import { Navigation } from "./Navigation";
import { MobileNavigation } from "./MobileNavigation";

export const Header = () => {
  return (
    <header>
      <div className="header-container">
        <div className="container-inner">
          <div>
            <a className="logo" href="/odin-blog-api">
              Stanimir's Blog
            </a>
          </div>
          <Navigation />
          <MobileNavigation />
        </div>
      </div>
    </header>
  );
};
