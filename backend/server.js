const express = require("express");
const cors = require("cors");
const db = require("./config/db");
const jobRoutes = require("./routes/jobRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Test Database Connection
db.query("SELECT 1", (err) => {
  if (err) {
    console.log("❌ DB Error:", err.message);
  } else {
    console.log("✅ MySQL Connected Successfully");
  }
});

// Test API Route
app.get("/", (req, res) => {
  res.send("🚀 Job Tracker API Running Successfully");
});

// Job Routes
app.use("/api/jobs", jobRoutes);

// IMPORTANT: Render uses dynamic PORT
const PORT = process.env.PORT || 5000;

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});