// src/pages/Home.js
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Students Psychology Support System</h1>
      <p>Welcome! Click below to login and start your journey.</p>
      <Link to="/login"><button>Login</button></Link>
    </div>
  );
};

export default Home;
