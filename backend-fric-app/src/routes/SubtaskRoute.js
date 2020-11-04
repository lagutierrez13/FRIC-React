// //Imports
// const mongoose = require("mongoose");

// //DB connection
// const URL = 'mongodb://127.0.0.1:27017/fricdb';

// mongoose.connect(URL, {
//     useCreateIndex: true,
//     useFindAndModify: false,
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   });

// //DB responses
// const connection = mongoose.connection;

// connection.once("open", () => console.log("MongoDB database connection to " + URL +" established successfully"));

const express = require('express');
const router = express.Router();
const {
    getSubtasks,
    createSubtask,
    deleteSubtask,
    updateSubtask,
    updateProgress,
} = require("../controllers/SubtaskController");

//Admin
router.get("/home/subtasks/get", getSubtasks);
router.post("/home/subtaks/new", createSubtask);
router.put("/home/subtasks/update/:id", updateSubtask);
router.put("/home/subtasks/updateprogress/:id", updateProgress);
router.delete("/home/subtasks/delete/:id", deleteSubtask);

//Export
module.exports = router;