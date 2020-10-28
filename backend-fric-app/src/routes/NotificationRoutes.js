//Imports
// const { Router } = require("express");
const express = require('express');
const router = express.Router();
const {
  getNotifications,
  // getNotificationBySlug,
  createNotification,
  deleteNotification,
  updateNotification,
} = require("../controllers/NotificationController");

// const auth = require("../middlewares/auth");

//Routes
router.get("/notification/get", getNotifications);
// router.get("/notifications/:slug", getNotificationBySlug);

//Only admin
router.post("/notification/new", createNotification);
router.put("/notification/update/:id", updateNotification);
router.delete("/notification/delete/:id", deleteNotification);

//Export
module.exports = router;



// //Only admin -- will use for permissions
// router.post("/api/new/post", auth, createPost);
// router.put("/api/update/:id", auth, updatePost);
// router.delete("/api/delete/:id", auth, deletePost);
