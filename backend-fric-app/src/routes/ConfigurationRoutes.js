//Imports
// const { Router } = require("express");
const express = require("express");
const router = express.Router();
const {
  getConfigurations,
  // getSystemBySlug,
  createConfiguration,
  deleteConfiguration,
  updateConfiguration,
  getConfiguration,
} = require("../controllers/ConfigurationController");

// const auth = require("../middlewares/auth");

//Routes
router.get("/configuration/get", getConfigurations);
// router.get("/systems/:slug", getSystemBySlug);

//Only admin
router.post("/configuration/new", createConfiguration);
router.put("/configuration/update/:tablename", updateConfiguration);
router.delete("/configuration/delete/:id", deleteConfiguration);
router.get("/configuration/get/:tablename", getConfiguration);

//Export
module.exports = router;

// //Only admin -- will use for permissions
// router.post("/api/new/post", auth, createPost);
// router.put("/api/update/:id", auth, updatePost);
// router.delete("/api/delete/:id", auth, deletePost);

// const router = require('express').Router();
// let Configuration = require('../models/configuration');
//
// router.route('/').get((req, res) => {
//     Configuration.find()
//         .then(configurations => res.json(configurations))
//         .catch(err => res.status(400).json('Error: ' + err));
// });
//
// router.route('/add').post((req, res) => {
//     const configurationname = req.body.configurationname;
//
//     const newConfiguration = new Configuration({configurationname});
//
//     newConfiguration.save()
//         .then(() => res.json('Configuration added!'))
//         .catch(err => res.status(400).json('Error: ' + err));
// });
//
// module.exports = router;
