import React, { useState, useEffect } from "react";
import { Comment } from "./Comment";

export const Blog = ({ title, message, date, blogid, ifReadOne }) => {
  const [author, setAuthor] = useState("");
  const [text, setText] = useState("");
  const [comments, setComments] = useState(null);

  const handleSubmit = (e) => {
    console.log(JSON.stringify({ author, text, blogid }));
    e.preventDefault();
    fetch(`http://localhost:5000/api/posts/${blogid}/comments`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ author, text, blogid }),
    }).then(() => {
      setAuthor("");
      setText("");
    });
  };

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
            <a className="blog-title" href={`posts/${blogid}`}>
              {title}
            </a>
          </div>
          <div className="blog-text">{message}</div>
          <div className="blog-footer">{date}</div>
        </div>
      )}
    </div>
  );
};
