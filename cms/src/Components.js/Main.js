import React, { useState } from "react";
import { Blog } from "./Blog";

export const Main = ({ token, user, posts }) => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  // create/post one post
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/api/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ title, text }),
    }).then(() => {
      setTitle("");
      setText("");
    });
  };

  return (
    <div className="main">
      <div className="main-container">
        {user ? null : (
          <a className="logged-info" href="/login">
            Log in to start editing.
          </a>
        )}
        {posts
          ? posts.map((post) => (
              <Blog
                key={post._id}
                title={post.title}
                message={post.text}
                date={post.createdAt}
                blogid={post._id}
                token={token}
              />
            ))
          : null}
        <form>
          <label>
            Title:
            <input
              type="text"
              name="title"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              value={title}
            />
          </label>
          <label>
            Post:
            <input
              type="text"
              name="text"
              onChange={(e) => {
                setText(e.target.value);
              }}
              value={text}
            />
          </label>
          <button onClick={(e) => handleSubmit(e)}>Create new post</button>
        </form>
      </div>
    </div>
  );
};
