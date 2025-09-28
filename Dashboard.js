// src/pages/Dashboard.js
import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <h1>Welcome to the Dashboard</h1>
      <ul>
        <li><Link to="/chatbot">Chatbot</Link></li>
        <li><Link to="/games">IQ & GK Games</Link></li>
        <li><Link to="/counseling">Counseling</Link></li>
        <li><Link to="/mood-tracker">Mood Tracker</Link></li>
        <li><Link to="/about-us">About Us</Link></li>
        <li><Link to="/reviews">Previous Students Reviews</Link></li>
        <li><Link to="/helpline">Helpline</Link></li>
      </ul>
    </div>
  );
};

export default Dashboard;
