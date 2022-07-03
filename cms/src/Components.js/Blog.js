import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Comment } from "./Comment";

export const Blog = ({ title, message, date, blogid, token, ifReadOne }) => {
  const [comments, setComments] = useState();
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

  //read/get all comments
  useEffect(() => {
    fetch(`http://localhost:5000/api/posts/${blogid}/comments`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setComments(data.comments);
      });
  });

  return (
    <div>
      {ifReadOne ? (
        <div className="main">
          <div className="main-container">
            <div className="blog-date-read-one">{date}</div>
            <div className="blog-header-read-one">{title}</div>
            <div className="blog-text read-one">{message}</div>
            <div className="comments-title">Comments:</div>
            {comments
              ? comments.map((comment) =>
                  comment.blogid === blogid ? (
                    <Comment
                      key={comment._id}
                      author={comment.author}
                      message={comment.text}
                      date={comment.createdAt}
                      blogid={blogid}
                      commentid={comment._id}
                    />
                  ) : null
                )
              : null}
          </div>
        </div>
      ) : (
        <div className="blog-item">
          <div className="blog-header">
            <a className="blog-title" href={`/posts/${blogid}`}>
              {title}
            </a>
            <button onClick={() => navigate(`/updatepost/${blogid}`)}>
              Edit
            </button>
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
      )}
    </div>
  );
};
