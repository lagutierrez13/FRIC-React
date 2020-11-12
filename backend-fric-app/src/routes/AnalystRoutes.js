//Imports
// const { Router } = require("express");
const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const keys = require("../config/keys");
const Analyst = require("../models/AnalystModel");
const validateRegisterInput = require("../validation/register");
const validateLoginInput = require("../validation/login");
const {
  registerAnalyst,
  loginAnalyst,
  getAnalysts,
  createAnalyst,
  deleteAnalyst,
  updateAnalyst,
  getAnalyst,
  promoteDemoteAnalyst,
  updateProgress,
} = require("../controllers/AnalystController");
const { route } = require("./SystemRoutes");

//Routes
router.post("/analyst/register", registerAnalyst);
router.post("/analyst/login", loginAnalyst);
router.get("/analyst/get", getAnalysts);

//Only admin
router.post("/analyst/new", createAnalyst);
router.put("/analyst/update/:id", updateAnalyst);
router.put("/analyst/updateprogress/:id", updateProgress);
router.put("/analyst/promotedemote/:id", promoteDemoteAnalyst);
router.delete("/analyst/delete/:id", deleteAnalyst);
router.get("/analyst/get/:initials", getAnalyst);

//Export
module.exports = router;