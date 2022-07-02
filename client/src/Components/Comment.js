import React from "react";

export const Comment = ({ author, message, date }) => {
  return (
    <div className="comment-item">
      <div className="comment-header comment-title">{author}</div>
      <div className="comment-txt">{message}</div>
      <div className="comment-footer">{date}</div>
    </div>
  );
};
