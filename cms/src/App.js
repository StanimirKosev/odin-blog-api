import "./App.css";
import { Header } from "./Components.js/Header";
import { Login } from "./Components.js/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Main } from "./Components.js/Main";
import React, { useState } from "react";

function App() {
  const [user, setUser] = useState();
  const [token, setToken] = useState("");

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

  return (
    <div>
      <Header />
      {user ? <Main token={token} /> : <Login handleLogin={handleLogin} />}
    </div>
  );
}

export default App;
