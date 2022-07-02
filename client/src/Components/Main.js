import React from "react";
import { Blog } from "./Blog";

export const Main = ({ posts }) => {
  return (
    <div className="main">
      <div className="main-container">
        {posts
          ? posts.map((post) => (
              <Blog
                key={post._id}
                title={post.title}
                message={post.text}
                date={post.createdAt}
                blogid={post._id}
              />
            ))
          : null}
      </div>
    </div>
  );
};
