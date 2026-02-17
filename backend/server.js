const express = require("express");
const cors = require("cors");
const db = require("./config/db");
const jobRoutes = require("./routes/jobRoutes");

const app = express();
app.use(cors());
app.use(express.json());

// Test DB
db.query("SELECT 1", (err) => {
  if (err) console.log("❌ DB Error");
  else console.log("✅ DB Connected");
});

// API Test
app.get("/", (req, res) => {
  res.send("Job Tracker API Running");
});

app.use("/api/jobs", jobRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Server running on ${PORT}`));
