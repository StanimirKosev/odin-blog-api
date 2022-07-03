import "./App.css";
import React, { useState, useEffect } from "react";
import { Header } from "./Components/Header";
import { Main } from "./Components/Main";
import { Blog } from "./Components/Blog";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [posts, setPosts] = useState();

  // read/get all posts
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
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Main posts={posts} />} />
          {posts
            ? posts.map((post) => (
                <Route
                  path={`posts/${post._id}`}
                  key={post._id}
                  element={
                    <Blog
                      key={post._id}
                      title={post.title}
                      message={post.text}
                      date={post.createdAt}
                      ifReadOne={true}
                      blogid={post._id}
                    />
                  }
                />
              ))
            : null}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
