import React from "react";
import { useNavigate } from "react-router-dom";

export const Blog = ({ titleBlog, message, date, blogid, token }) => {
  const navigate = useNavigate();

  // delete one post
  const handleDelete = () => {
    fetch(`http://localhost:5000/api/posts/${blogid}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  };

  return (
    <div className="blog-item">
      <div className="blog-header">
        <a className="blog-title" href={`posts/${blogid}`}>
          {titleBlog}
        </a>
        <button onClick={() => navigate(`/updatepost${blogid}`)}>Edit</button>
        <button
          onClick={() => {
            handleDelete();
          }}
        >
          Delete
        </button>
      </div>
      <div className="blog-text">{message}</div>
      <div className="blog-footer">{date}</div>
    </div>
  );
};
