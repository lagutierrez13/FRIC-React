//Imports
// const { Router } = require("express");
const express = require('express');
const router = express.Router();
const {
  getEvents,
  getEventBySlug,
  createEvent,
  deleteEvent,
  updateEvent,
} = require("../controllers/EventController");

//used for user authentication
// const auth = require("../middlewares/auth");

//Routes
router.get("/events/get", getEvents);
// router.get("/events/:slug", getEventBySlug);

//Only admin
router.post("/events/new", createEvent);
router.put("/events/update/:id", updateEvent);
router.delete("/events/delete/:id", deleteEvent);

//Export
module.exports = router;



// //Only admin -- will use for permissions
// router.post("/api/new/post", auth, createPost);
// router.put("/api/update/:id", auth, updatePost);
// router.delete("/api/delete/:id", auth, deletePost);
