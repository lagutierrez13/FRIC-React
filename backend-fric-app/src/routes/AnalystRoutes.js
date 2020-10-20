//Imports
// const { Router } = require("express");
const express = require('express');
const router = express.Router();
const {
    getAnalysts,
    // getSystemBySlug,
    createAnalyst,
    deleteAnalyst,
    updateAnalyst,
    authenticateAnalyst,
    getAnalyst,
} = require("../controllers/AnalystController");

// const auth = require("../middlewares/auth");

//Routes
router.get("/analyst/getall", getAnalysts);
router.get("/analyst/get", getAnalyst);
// router.get("/systems/:slug", getSystemBySlug);

//Only admin
router.post("/analyst/new", createAnalyst);
router.put("/analyst/update/:initials", updateAnalyst);
router.delete("/analyst/delete/:initials", deleteAnalyst);
router.get("/analyst/get/:initials", getAnalyst);
router.get("/analyst/get/:initials", authenticateAnalyst);

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