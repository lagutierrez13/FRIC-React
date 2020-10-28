//Imports
// const { Router } = require("express");
const express = require('express');
const router = express.Router();
const {
  getFindings,
  // getfindingBySlug,
  createFinding,
  deleteFinding,
  updateFinding,
} = require("../controllers/FindingController");

//used for user authentication
// const auth = require("../middlewares/auth");

//Routes
router.get("/home/findings/get", getFindings);
// router.get("/findings/:slug", getfindingBySlug);

//Only admin
router.post("/home/findings/new", createFinding);
router.put("/home/findings/update/:id", updateFinding);
router.delete("/home/findings/delete/:id", deleteFinding);

//Export
module.exports = router;



// //Only admin -- will use for permissions
// router.post("/api/new/post", auth, createPost);
// router.put("/api/update/:id", auth, updatePost);
// router.delete("/api/delete/:id", auth, deletePost);
