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
  getAnalysts,
  createAnalyst,
  deleteAnalyst,
  updateAnalyst,
  authenticateAnalyst,
  getAnalyst,
  promoteDemoteAnalyst,
  updateProgress,
} = require("../controllers/AnalystController");

//REGISTER---------

// @route POST api/users/register
// @desc Register user
// @access Public
router.post("/analyst/register", (req, res) => {
  // Form validation
  const { errors, isValid } = validateRegisterInput(req.body);
  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
  Analyst.findOne({ initials: req.body.initials }).then((analyst) => {
    if (analyst) {
      return res.status(400).json({ initials: "Initials already exist" });
    } else {
      const newAnalyst = new User({
        initials: req.body.initials,
      });
      // Hash password before saving in database
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newAnalyst.initials, salt, (err, hash) => {
          if (err) throw err;
          newAnalyst.initials = hash;
          newAnalyst
            .save()
            .then((analyst) => res.json(user))
            .catch((err) => console.log(err));
        });
      });
    }
  });
});

//LOGIN----------

// @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
router.post("/analyst/login", (req, res) => {
  // Form validation
  const { errors, isValid } = validateLoginInput(req.body);
  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
  const initials = req.body.initials;
  const email = req.body.email;
  const password = req.body.password;
  // Find user by initials
  Analyst.findOne({ initials }).then((analyst) => {
    // Check if user exists
    if (!analyst) {
      return res.status(404).json({ initialsnotfound: "Email not found" });
    }
    // Check password
    bcrypt.compare(password, analyst.initials).then((isMatch) => {
      if (isMatch) {
        // User matched
        // Create JWT Payload
        const payload = {
          id: analyst._id,
          name: analyst.initials,
        };
        // Sign token
        jwt.sign(
          payload,
          keys.secretOrKey,
          {
            expiresIn: 31556926, // 1 year in seconds
          },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token,
            });
          }
        );
      } else {
        return res
          .status(400)
          .json({ initialsincorrect: "Initials incorrect" });
      }
    });
  });
});

//Routes
router.get("/analyst/get", getAnalysts);
// router.get("/systems/:slug", getSystemBySlug);

//Only admin
router.post("/analyst/new", createAnalyst);
router.put("/analyst/update/:id", updateAnalyst);
router.put("/analyst/updateprogress/:id", updateProgress);
router.put("/analyst/promotedemote/:id", promoteDemoteAnalyst);
router.delete("/analyst/delete/:id", deleteAnalyst);
router.get("/analyst/get/:initials", getAnalyst);
router.get("/analyst/authenticate/:initials", authenticateAnalyst);

//Export
module.exports = router;

// //Only admin -- will use for permissions
// router.post("/api/new/post", auth, createPost);
// router.put("/api/update/:id", auth, updatePost);
// router.delete("/api/delete/:id", auth, deletePost);

// const router = require('express').Router();
// let Analyst = require('../models/analyst');
//
// router.route('/').get((req, res) => {
//     Analyst.find()
//         .then(analysts => res.json(analysts))
//         .catch(err => res.status(400).json('Error: ' + err));
// });
//
// router.route('/add').post((req, res) => {
//     const analystname = req.body.analystname;
//
//     const newAnalyst = new Analyst({analystname});
//
//     newAnalyst.save()
//         .then(() => res.json('Analyst added!'))
//         .catch(err => res.status(400).json('Error: ' + err));
// });
//
// module.exports = router;
