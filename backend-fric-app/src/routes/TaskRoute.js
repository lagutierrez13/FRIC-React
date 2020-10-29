//Imports
// const { Router } = require("express");
const express = require('express');
const router = express.Router();
const {
  getTasks,
  // getSystemBySlug,
  createTask,
  deleteTask,
  updateTask,
  updateProgress,
} = require("../controllers/TaskController");

// const auth = require("../middlewares/auth");

//Routes
router.get("/home/tasks/get", getTasks);
// router.get("/systems/:slug", getSystemBySlug);

//Only admin
router.post("/home/tasks/new", createTask);
router.put("/home/tasks/update/:id", updateTask);
router.put("/home/tasks/updateprogress/:id", updateProgress);
router.delete("/home/tasks/delete/:id", deleteTask);

//Export
module.exports = router;