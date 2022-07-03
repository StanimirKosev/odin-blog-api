import React from "react";

export const Blog = ({ titleBlog, message, date, blogid }) => {
  return (
    <div className="blog-item">
      <div className="blog-header">
        <a className="blog-title" href={`posts/${blogid}`}>
          {titleBlog}
        </a>
      </div>
      <div className="blog-text">{message}</div>
      <div className="blog-footer">{date}</div>
    </div>
  );
};
