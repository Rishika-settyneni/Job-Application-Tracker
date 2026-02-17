const db = require("../config/db");

// ADD JOB
exports.addJob = (req, res) => {
  const { user_id, company, role, status, applied_date, remarks } = req.body;

  const sql = `
    INSERT INTO jobs (user_id, company, role, status, applied_date, remarks)
    VALUES (?, ?, ?, ?, ?, ?)
  `;

  db.query(sql, [user_id, company, role, status, applied_date, remarks], (err) => {
    if (err) {
      console.log("❌ MySQL Error:", err);
      return res.status(500).json(err);
    }
    res.json({ message: "Job Added Successfully" });
  });
};

// GET JOBS
exports.getJobs = (req, res) => {
  db.query("SELECT * FROM jobs ORDER BY id DESC", (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
};

// UPDATE JOB (Timeline + Status)
exports.updateJob = (req, res) => {
  const {
    id,
    status,
    shortlisted_date,
    assessment_date,
    interview_date,
    final_result_date,
    remarks
  } = req.body;

  const sql = `
    UPDATE jobs SET 
      status = COALESCE(?, status),
      shortlisted_date = COALESCE(?, shortlisted_date),
      assessment_date = COALESCE(?, assessment_date),
      interview_date = COALESCE(?, interview_date),
      final_result_date = COALESCE(?, final_result_date),
      remarks = COALESCE(?, remarks)
    WHERE id = ?
  `;

  db.query(sql, [
    status,
    shortlisted_date,
    assessment_date,
    interview_date,
    final_result_date,
    remarks,
    id
  ], (err) => {
    if (err) {
      console.log("❌ MySQL Error:", err);
      return res.status(500).json(err);
    }
    res.json({ message: "Updated Successfully" });
  });
};

// DELETE JOB
exports.deleteJob = (req, res) => {
  db.query("DELETE FROM jobs WHERE id=?", [req.params.id], (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Job Deleted" });
  });
};
