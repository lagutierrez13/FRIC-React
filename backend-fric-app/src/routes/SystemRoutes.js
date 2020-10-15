//Imports
// const { Router } = require("express");
const express = require('express');
const router = express.Router();
const {
  getSystems,
  // getSystemBySlug,
  createSystem,
  deleteSystem,
  updateSystem,
} = require("../controllers/SystemController");

// const auth = require("../middlewares/auth");

//Routes
router.get("/home/systems/get", getSystems);
// router.get("/systems/:slug", getSystemBySlug);

//Only admin
router.post("/home/systems/new", createSystem);
router.put("/home/systems/update/:id", updateSystem);
router.delete("/home/systems/delete/:id", deleteSystem);

//Export
module.exports = router;



// //Only admin -- will use for permissions
// router.post("/api/new/post", auth, createPost);
// router.put("/api/update/:id", auth, updatePost);
// router.delete("/api/delete/:id", auth, deletePost);
