const express = require("express");
const { register } = require("./auth");
const router = express.Router();
const jobs = require("../controllers/jobs");

router.route("/").post(jobs.createJob).get(jobs.getAllJobs);
router
  .route("/:id")
  .get(jobs.getJob)
  .delete(jobs.deleteJob)
  .patch(jobs.updateJob);

module.exports = router;
