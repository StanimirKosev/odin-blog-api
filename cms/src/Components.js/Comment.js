import React from "react";

export const Comment = ({ author, message, date, blogid, commentid }) => {
  //delete comment
  const handleDelete = () => {
    fetch(`http://localhost:5000/api/posts/${blogid}/comments/${commentid}`, {
      method: "DELETE",
    });
  };

  return (
    <div className="comment-item">
      <div className="comment-header comment-title">
        {author}
        <button onClick={() => handleDelete()}>Delete</button>
      </div>
      <div className="comment-txt">{message}</div>
      <div className="comment-footer">{date}</div>
    </div>
  );
};
