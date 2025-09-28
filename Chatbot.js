// src/pages/Chatbot.js
import React, { useState } from "react";

const predefinedReplies = {
  "hello": "Hi! How are you feeling today?",
  "sad": "I’m here to help. Can you tell me why you feel sad?",
  "happy": "Great to hear that! Keep smiling 😊",
  "default": "I’m not sure about that. Can you rephrase?"
};

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input) return;
    const reply = predefinedReplies[input.toLowerCase()] || predefinedReplies["default"];
    setMessages([...messages, { user: input, bot: reply }]);
    setInput("");
  };

  return (
    <div>
      <h2>Chatbot</h2>
      <div>
        {messages.map((msg, idx) => (
          <div key={idx}>
            <strong>You:</strong> {msg.user}<br/>
            <strong>Bot:</strong> {msg.bot}<br/><br/>
          </div>
        ))}
      </div>
      <input 
        type="text" 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
        placeholder="Type your message..."
      />
      <button onClick={handleSend}>Send</button>
    </div>
  );
};

export default Chatbot;
