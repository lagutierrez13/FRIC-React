//Imports
const Analyst = require("../models/AnalystModel");
const validateRegisterInput = require("../validation/register");
const validateLoginInput = require("../validation/login");
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");

//Object
const analystCtrl = {};

//Authentication
analystCtrl.registerAnalyst = async (req, res) => {
  // Form validation
  const { errors, isValid } = validateRegisterInput(req.body);
  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
  try {
    const analyst = await Analyst.findOne({ initials: req.body.initials });
    if (analyst) {
      return res.status(400).json({ initials: "Initials already exist" });
    } else {
      const newAnalyst = new Analyst({
        initials: req.body.initials,
        first: "",
        last: "",
        title: "",
        ip: "",
        isLead: false,
        progress: 0,
      });
      try {
        await newAnalyst.save();
        res.json("create analyst!");
        res.status(200).send({ message: "Analyst Created" });
      } catch (error) {
        res.status(500).send(error);
      }
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

analystCtrl.loginAnalyst = async (req, res) => {
  // Form validation
  const { errors, isValid } = validateLoginInput(req.body);
  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
  try {
    const analyst = await Analyst.findOne({ initials: req.body.initials });
    // Check if user exists
    if (!analyst) {
      return res.status(404).json({ initialsnotfound: "Initials not found" });
    }
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
  } catch (error) {
    res.status(500).send(error);
  }
};

//Functions
analystCtrl.getAnalysts = async (req, res) => {
  try {
    const analyst = await Analyst.find();
    if (analyst) {
      res.json(analyst); //need to change to .status(200).send(systems) after done testing with postman
    } else {
      res.status(404).send({ error: "Notes not found" });
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

analystCtrl.getAnalyst = async (initials, res) => {
  try {
    const analyst = await Analyst.findOne({
      initials,
    });
    if (analyst) {
      res.json(analyst); //need to change to .status(200).send(systems) after done testing with postman
    } else {
      res.status(404).send({ error: "Notes not found" });
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

analystCtrl.createAnalyst = async (req, res) => {
  const newAnalyst = new Analyst(req.body);
  try {
    await newAnalyst.save();
    res.json("create analyst!");
    res.status(200).send({ message: "Analyst Created" });
  } catch (error) {
    res.status(500).send(error);
  }
};

analystCtrl.updateAnalyst = async (req, res) => {
  const body = req.body;
  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide a body to update",
    });
  }
  Analyst.findOne({ _id: req.params.id }, (err, analyst) => {
    if (err) {
      return res.status(404).json({
        err,
        message: "Analyst not found!",
      });
    }
    analyst.initials = body.initials;
    analyst.first = body.first;
    analyst.last = body.last;
    analyst.title = body.title;
    analyst.ip = body.ip;
    analyst.isLead = body.isLead;
    analyst.progress = body.progress;
    analyst
      .save()
      .then(() => {
        return res.status(200).json({
          success: true,
          id: analyst._id,
          message: "Analyst updated!",
        });
      })
      .catch((error) => {
        return res.status(404).json({
          error,
          message: "Analyst not updated!",
        });
      });
  });
};

analystCtrl.promoteDemoteAnalyst = async (req, res) => {
  Analyst.findOne({ _id: req.params.id }, (err, analyst) => {
    if (err) {
      return res.status(404).json({
        err,
        message: "Analyst not found!",
      });
    }
    analyst.isLead = !analyst.isLead;
    analyst
      .save()
      .then(() => {
        return res.status(200).json({
          success: true,
          id: analyst._id,
          message: "Analyst promoted!",
        });
      })
      .catch((error) => {
        return res.status(404).json({
          error,
          message: "Analyst not promoted!",
        });
      });
  });
};

analystCtrl.updateProgress = async (req, res) => {
  const body = req.body;
  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide a body to update",
    });
  }
  Analyst.findOne({ _id: req.params.id }, (err, analyst) => {
    if (err) {
      return res.status(404).json({
        err,
        message: "Analyst not found!",
      });
    }
    analyst.progress = body.progress;
    analyst
      .save()
      .then(() => {
        return res.status(200).json({
          success: true,
          id: analyst._id,
          message: "Analyst updated!",
        });
      })
      .catch((error) => {
        return res.status(404).json({
          error,
          message: "Analyst not updated!",
        });
      });
  });
};

analystCtrl.deleteAnalyst = async (req, res) => {
  try {
    await Analyst.findOneAndDelete({ _id: req.params.id });
    res.status(200).send({ message: "Analyst deleted successfully" });
  } catch (error) {
    res.status(500).send(error);
  }
};

//Export
module.exports = analystCtrl;
