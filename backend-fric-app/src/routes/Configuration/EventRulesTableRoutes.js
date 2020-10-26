//Imports
// const { Router } = require("express");
const express = require('express');
const router = express.Router();
const {
  getEventRulesTable,
  createEventRulesTable,
  // getSystemBySlug,
} = require("../../controllers/Configuration/EventRulesTableController");

// const auth = require("../middlewares/auth");

//Routes
router.get("/eventrulestable/get", getEventRulesTable);
// router.get("/systems/:slug", getSystemBySlug);

//Only admin
router.post("/eventrulestable/new", createEventRulesTable);

//Export
module.exports = router;



// //Only admin -- will use for permissions
// router.post("/api/new/post", auth, createPost);
// router.put("/api/update/:id", auth, updatePost);
// router.delete("/api/delete/:id", auth, deletePost);
