require("dotenv").config();
const express = require("express");
const cors = require("cors");
const db = require("./config/db");
const authRoutes = require("./routes/authRoutes");

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// test DB
db.query("SELECT 1 + 1 AS result", (err, results) => {
  if (err) console.log("DB error:", err);
  else console.log("DB test success:", results);
});

// test route
app.get("/", (req, res) => {
  res.send("Job Application Tracker API running");
});

// auth routes
app.use("/api/auth", authRoutes);

const jobRoutes = require("./routes/jobRoutes");

app.use("/api/jobs", jobRoutes);


const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
