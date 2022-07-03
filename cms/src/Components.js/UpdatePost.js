import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const UpdatePost = ({ user, token, blogid }) => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const navigate = useNavigate();

  // update/put one post
  const handleUpdate = () => {
    fetch(`http://localhost:5000/api/posts/${blogid}`, {
      method: "PUT",
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
        {user ? (
          <form>
            <label>
              Title:{" "}
              <input
                type="text"
                name="title"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
              />
            </label>
            <label>
              Text:
              <input
                type="text"
                name="text"
                onChange={(e) => setText(e.target.value)}
                value={text}
              />
            </label>
            <button
              onClick={() => {
                handleUpdate();
                navigate("/");
              }}
            >
              Update post
            </button>
          </form>
        ) : (
          <a className="logged-info" href="/login">
            Log in to start editing.
          </a>
        )}
      </div>
    </div>
  );
};
