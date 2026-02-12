const express = require("express");
const router = express.Router();
const { addJob, getJobs, updateStatus, deleteJob } = require("../controllers/jobController");
router.post("/add", addJob);
router.get("/all", getJobs);
router.put("/update", updateStatus);
router.delete("/delete/:id", deleteJob);


module.exports = router;
