import React from "react";

export const Header = () => {
  return (
    <header>
      <div className="header-container">
        <div>
          <a className="logo" href="/odin-blog-api">
            Stanimir's Blog
          </a>
        </div>
        <div className="header-links">
          <a href="https://twitter.com/stanimir_kosev">Twitter</a>
          <a href="https://github.com/StanimirKosev">Github</a>
          <a href="https://www.goodreads.com/user/show/124508945-stanimir-kosev">
            Goodreads
          </a>
        </div>
      </div>
    </header>
  );
};
