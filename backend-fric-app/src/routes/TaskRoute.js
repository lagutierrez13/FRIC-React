//Imports
const express = require('express');
const router = express.Router();
const {
  getTasks,
  createTask,
  deleteTask,
  updateTask,
  updateProgress,
} = require("../controllers/TaskController");

//Admin
router.get("/home/tasks/get", getTasks);
router.post("/home/tasks/new", createTask);
router.put("/home/tasks/update/:id", updateTask);
router.put("/home/tasks/updateprogress/:id", updateProgress);
router.delete("/home/tasks/delete/:id", deleteTask);

//Export
module.exports = router;