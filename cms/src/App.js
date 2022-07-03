import "./App.css";
import { Header } from "./Components.js/Header";
import { Login } from "./Components.js/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Main } from "./Components.js/Main";
import { UpdatePost } from "./Components.js/UpdatePost";
import React, { useState, useEffect } from "react";

function App() {
  const [user, setUser] = useState();
  const [token, setToken] = useState("");
  const [posts, setPosts] = useState();

  const handleLogin = (e, username, password) => {
    e.preventDefault();
    fetch("http://localhost:5000/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setUser(data.user);
        setToken(data.token);
      });
  };

  // read/get all posts
  useEffect(() => {
    fetch("http://localhost:5000/api/posts")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setPosts(data.posts);
      });
  });

  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={<Main token={token} user={user} posts={posts} />}
          />
          <Route
            path="/login"
            element={<Login handleLogin={handleLogin} user={user} />}
          />
          {posts
            ? posts.map((post) => (
                <Route
                  key={post._id}
                  path={`/updatepost${post._id}`}
                  element={
                    <UpdatePost
                      user={user}
                      token={token}
                      blogid={post._id}
                      titleOld={post.title}
                      textOld={post.text}
                    />
                  }
                />
              ))
            : null}

          <Route />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
