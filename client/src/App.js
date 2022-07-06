import "./App.css";
import React, { useState, useEffect } from "react";
import { Header } from "./Components/Header";
import { Main } from "./Components/Main";
import { Blog } from "./Components/Blog";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [posts, setPosts] = useState();
  const [theme, setTheme] = useState("light");
  const [loading, setLoading] = useState(true);

  const toggleTheme = () => {
    localStorage.setItem("theme", theme === "light" ? "dark" : "light");
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    if (localStorage.getItem("theme")) {
      setTheme(localStorage.getItem("theme"));
    }
  }, []);

  // read/get all posts
  useEffect(() => {
    setLoading(true);
    try {
      fetch("https://boiling-woodland-03730.herokuapp.com/api/posts")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setLoading(false);
          setPosts(data.posts);
        });
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <Router>
      <div className="App" id={theme}>
        <Header toggleTheme={toggleTheme} theme={theme} />
        <Routes>
          <Route
            path="/odin-blog-api/"
            element={<Main posts={posts} loading={loading} />}
          />
          {posts
            ? posts.map((post) => (
                <Route
                  path={`/odin-blog-api/posts/${post._id}`}
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
