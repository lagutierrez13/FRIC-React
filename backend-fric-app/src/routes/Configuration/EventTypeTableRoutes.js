//Imports
// const { Router } = require("express");
const express = require('express');
const router = express.Router();
const {
  getEventTypeTable,
  createEventTypeTable,
  // getSystemBySlug,
} = require("../../controllers/Configuration/EventTypeTableController");

// const auth = require("../middlewares/auth");

//Routes
router.get("/eventtypetable/get", getEventTypeTable);
// router.get("/systems/:slug", getSystemBySlug);

//Only admin
router.post("/eventtypetable/new", createEventTypeTable);

//Export
module.exports = router;



// //Only admin -- will use for permissions
// router.post("/api/new/post", auth, createPost);
// router.put("/api/update/:id", auth, updatePost);
// router.delete("/api/delete/:id", auth, deletePost);
