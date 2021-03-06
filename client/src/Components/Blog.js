import React, { useState, useEffect } from "react";
import { Comment } from "./Comment";
import { useNavigate } from "react-router-dom";

export const Blog = ({ title, message, date, blogid, ifReadOne }) => {
  const [author, setAuthor] = useState("");
  const [text, setText] = useState("");
  const [comments, setComments] = useState(null);

  const navigate = useNavigate();

  // post/create comment
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(
      `https://boiling-woodland-03730.herokuapp.com/api/posts/${blogid}/comments`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ author, text, blogid }),
      }
    ).then(() => {
      setAuthor("");
      setText("");
    });
  };

  // get/read all comments
  useEffect(() => {
    fetch(
      `https://boiling-woodland-03730.herokuapp.com/api/posts/${blogid}/comments`
    )
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
                    />
                  ) : null
                )
              : null}
            <form>
              <label>
                Name:
                <input
                  type="text"
                  name="author"
                  onChange={(e) => {
                    setAuthor(e.target.value);
                  }}
                  value={author}
                />
              </label>
              <label>
                Comment:
                <input
                  type="text"
                  name="text"
                  onChange={(e) => {
                    setText(e.target.value);
                  }}
                  value={text}
                />
              </label>
              <button onClick={(e) => handleSubmit(e)}>Send</button>
            </form>
          </div>
        </div>
      ) : (
        <div className="blog-item">
          <div className="blog-header">
            <div
              className="blog-title"
              onClick={() => navigate(`/odin-blog-api/posts/${blogid}`)}
            >
              {title}
            </div>
          </div>
          <div className="blog-text">{message}</div>
          <div className="blog-footer">{date}</div>
        </div>
      )}
    </div>
  );
};
