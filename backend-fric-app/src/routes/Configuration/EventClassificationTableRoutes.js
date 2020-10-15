//Imports
// const { Router } = require("express");
const express = require('express');
const router = express.Router();
const {
  getEventClassificationTable,
  createEventClassificationTable,
  // getSystemBySlug,
} = require("../../controllers/Configuration/EventClassificationTableController");

// const auth = require("../middlewares/auth");

//Routes
router.get("/eventclassificationtable/get", getEventClassificationTable);
// router.get("/systems/:slug", getSystemBySlug);

//Only admin
router.post("/eventclassificationtable/new", createEventClassificationTable);

//Export
module.exports = router;



// //Only admin -- will use for permissions
// router.post("/api/new/post", auth, createPost);
// router.put("/api/update/:id", auth, updatePost);
// router.delete("/api/delete/:id", auth, deletePost);
