const db = require("../config/db");

exports.addJob = (req, res) => {
  const { user_id, company, role, status, applied_date } = req.body;

  const sql = "INSERT INTO jobs (user_id, company, role, status, applied_date) VALUES (?, ?, ?, ?, ?)";
  
  db.query(sql, [user_id, company, role, status, applied_date], (err) => {

    if (err) {
      console.log("❌ MySQL Error:", err);
      return res.status(500).json(err);
    }

    res.json({ message: "Job added successfully" });
  });
};

exports.getJobs = (req, res) => {
  const sql = "SELECT * FROM jobs";
  db.query(sql, (err, results) => {
    if (err) {
      console.log("❌ MySQL Error:", err);
      return res.status(500).json(err);
    }
    res.json(results);
  });
};

exports.updateStatus = (req, res) => {
  const { id, status } = req.body;

  const sql = "UPDATE jobs SET status=? WHERE id=?";
  db.query(sql, [status, id], (err) => {
    if (err) {
      console.log("❌ MySQL Error:", err);
      return res.status(500).json(err);
    }
    res.json({ message: "Status updated" });
  });
};

exports.deleteJob = (req, res) => {
  const { id } = req.params;

  const sql = "DELETE FROM jobs WHERE id=?";
  db.query(sql, [id], (err) => {
    if (err) {
      console.log("❌ MySQL Error:", err);
      return res.status(500).json(err);
    }
    res.json({ message: "Job deleted" });
  });
};
