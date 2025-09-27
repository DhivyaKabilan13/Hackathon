const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/mentalHealthDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(()=> console.log("MongoDB connected"))
.catch(err => console.log(err));

// Mood Schema
const moodSchema = new mongoose.Schema({
  mood: String,
  date: { type: Date, default: Date.now },
});
const Mood = mongoose.model("Mood", moodSchema);

// Routes
app.get("/", (req, res) => {
  res.send("Backend Running");
});

// Mood Tracker API
app.post("/api/mood", async (req, res) => {
  const { mood } = req.body;
  const newMood = new Mood({ mood });
  await newMood.save();
  res.json({ success: true, mood: newMood });
});

// Simple Chatbot API
app.post("/api/chatbot", (req, res) => {
  const { message } = req.body;
  let reply = "I'm here for you ❤️";

  if(message.toLowerCase().includes("sad")) reply = "It's okay to feel sad. Try deep breaths.";
  if(message.toLowerCase().includes("stress")) reply = "Take a short break and relax.";

  res.json({ reply });
});

app.listen(PORT, ()=> console.log(`Server running on http://localhost:${PORT}`));
