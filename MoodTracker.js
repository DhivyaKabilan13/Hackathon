// src/pages/MoodTracker.js
import React from "react";
import { useNavigate } from "react-router-dom";

const MoodTracker = () => {
  const navigate = useNavigate();
  const handleMood = (mood) => {
    // Redirect based on mood
    if (mood === "happy") navigate("/chatbot");
    else if (mood === "sad") navigate("/counseling");
    else navigate("/chatbot");
  };

  return (
    <div>
      <h2>Mood Tracker</h2>
      <button onClick={() => handleMood("happy")}>😊 Happy</button>
      <button onClick={() => handleMood("sad")}>😢 Sad</button>
      <button onClick={() => handleMood("neutral")}>😐 Neutral</button>
    </div>
  );
};

export default MoodTracker;
