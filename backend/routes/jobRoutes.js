const express = require("express");
const router = express.Router();
const { addJob, getJobs, updateJob, deleteJob } = require("../controllers/jobController");

router.post("/add", addJob);
router.get("/all", getJobs);
router.put("/update", updateJob);
router.delete("/delete/:id", deleteJob);

module.exports = router;
