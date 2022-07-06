import React from "react";
import { Blog } from "./Blog";
import { CircularProgress } from "@mui/material";

export const Main = ({ posts, loading }) => {
  return (
    <div className="main">
      <div className="main-container">
        {loading ? (
          <div className="loading-circle">
            <CircularProgress color="inherit" />
          </div>
        ) : (
          posts.map((post) => (
            <Blog
              key={post._id}
              title={post.title}
              message={post.text}
              date={post.createdAt}
              blogid={post._id}
            />
          ))
        )}
      </div>
    </div>
  );
};
