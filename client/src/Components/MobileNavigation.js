import React, { useState } from "react";

export const MobileNavigation = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className="mobile-navigation">
      <div
        className={open ? "open menu-btn" : "menu-btn"}
        onClick={handleClick}
      >
        <div className="menu-btn-burger"></div>
      </div>
      <div className={open ? "open nav-links" : "nav-links"}>
        <div className={open ? "header-links open" : "header-links"}>
          <a href="https://twitter.com/stanimir_kosev">Twitter</a>
          <a href="https://github.com/StanimirKosev">Github</a>
          <a href="https://www.goodreads.com/user/show/124508945-stanimir-kosev">
            Goodreads
          </a>
        </div>
      </div>
    </div>
  );
};
