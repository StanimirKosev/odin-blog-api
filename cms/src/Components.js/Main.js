import React, { useEffect, useState } from "react";
import { Blog } from "./Blog";

export const Main = ({ token }) => {
  const [posts, setPosts] = useState();
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:5000/api/posts`, {
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

  useEffect(() => {
    fetch("http://localhost:5000/api/posts")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setPosts(data.posts);
      });
  }, []);

  return (
    <div className="main">
      <div className="main-container">
        {posts
          ? posts.map((post) => (
              <Blog
                key={post._id}
                titleBlog={post.title}
                message={post.text}
                date={post.createdAt}
                blogid={post._id}
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
          <button onClick={(e) => handleSubmit(e)}>Send</button>
        </form>
      </div>
    </div>
  );
};
