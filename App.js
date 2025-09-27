import React, { useState } from "react";
import "./App.css";

function App() {
  const [mood, setMood] = useState("");
  const [chatInput, setChatInput] = useState("");
  const [chatMessages, setChatMessages] = useState([]);
  const [number, setNumber] = useState(Math.floor(Math.random() * 10) + 1);
  const [guess, setGuess] = useState("");
  const [result, setResult] = useState("");

  // Mood Tracker
  const handleMood = (m) => {
    setMood(m);
    alert(`Your mood "${m}" has been saved!`);
  };

  // Chatbot
  const sendMessage = () => {
    if (!chatInput) return;
    setChatMessages([...chatMessages, { sender: "You", text: chatInput }]);

    // Simple bot reply
    let botReply = "I’m here to support you ❤️";
    if (chatInput.toLowerCase().includes("sad")) {
      botReply = "I’m sorry to hear that 😔. Try some deep breathing.";
    } else if (chatInput.toLowerCase().includes("happy")) {
      botReply = "That’s wonderful! Keep spreading positivity 🌸";
    }

    setChatMessages((prev) => [...prev, { sender: "Bot", text: botReply }]);
    setChatInput("");
  };

  // Game - Guess the Number
  const checkGuess = () => {
    if (parseInt(guess) === number) {
      setResult("🎉 Correct! You guessed it!");
    } else {
      setResult("❌ Try again!");
    }
  };

  return (
    <div className="App">
      <header className="header">
        <h1>🌿 Mental Health Support System</h1>
      </header>

      <div className="container">
        {/* Mood Tracker */}
        <div className="card">
          <h2>Mood Tracker</h2>
          <button onClick={() => handleMood("Happy")}>😊 Happy</button>
          <button onClick={() => handleMood("Neutral")}>😐 Neutral</button>
          <button onClick={() => handleMood("Sad")}>😔 Sad</button>
          {mood && <p>Your current mood: <strong>{mood}</strong></p>}
        </div>

        {/* Chatbot */}
        <div className="card">
          <h2>Chatbot</h2>
          <div className="chatbox">
            {chatMessages.map((msg, idx) => (
              <p key={idx}><strong>{msg.sender}:</strong> {msg.text}</p>
            ))}
          </div>
          <input
            type="text"
            value={chatInput}
            onChange={(e) => setChatInput(e.target.value)}
            placeholder="Type a message..."
          />
          <button onClick={sendMessage}>Send</button>
        </div>

        {/* Games / Puzzles */}
        <div className="card">
          <h2>Game: Guess the Number (1–10)</h2>
          <input
            type="number"
            value={guess}
            onChange={(e) => setGuess(e.target.value)}
            placeholder="Enter a number"
          />
          <button onClick={checkGuess}>Guess</button>
          <p>{result}</p>
        </div>

        {/* Counseling */}
        <div className="card">
          <h2>Counseling</h2>
          <p>📞 Helpline: 1800-599-0019</p>
          <p>💬 Connect with a counselor for free sessions.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
