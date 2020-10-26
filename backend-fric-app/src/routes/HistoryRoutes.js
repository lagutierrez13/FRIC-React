//Imports
// const { Router } = require("express");
const express = require('express');
const router = express.Router();
const {
  getHistory,
  // getHistoryBySlug,
  createHistory,
  deleteHistory,
  updateHistory,
} = require("../controllers/HistoryController");

// const auth = require("../middlewares/auth");

//Routes
router.get("/history/get", getHistory);
// router.get("/historys/:slug", getHistoryBySlug);

//Only admin
router.post("/history/new", createHistory);
router.put("/history/update/:id", updateHistory);
router.delete("/history/delete/:id", deleteHistory);

//Export
module.exports = router;



// //Only admin -- will use for permissions
// router.post("/api/new/post", auth, createPost);
// router.put("/api/update/:id", auth, updatePost);
// router.delete("/api/delete/:id", auth, deletePost);
