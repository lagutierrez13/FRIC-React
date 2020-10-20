//Imports
const Analyst = require("../models/AnalystModel");

//Object
const analystCtrl = {};

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

// analystCtrl.authenticateAnalyst = async (initials) => {
//   const analyst = await Analyst.findOne({
//     initials,
//   });
//   if (analyst) {
//     const isMatched = await bcrypt.compare(initials, analyst.initials);
//     if (isMatched) {
//       return analyst;
//     } else {
//       throw new Error("unable to log in");
//     }
//   } else {
//     throw new Error({
//       error: "unable to log in",
//     });
//   }
// };

//Login user endpoint
analystCtrl.authenticateAnalyst = async (req, res) => {
  const { initials } = req.body.initials;
  try {
    const analyst = await Analyst.findByCredentials(initials);
    const token = await analyst.generateAuthToken();
    res.status(200).send({ token });
  } catch (error) {
    res.status(400).send({ error });
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

// systemCtrl.getSystemBySlug = async (req, res) => {
//   try {
//     const system = await System.findOne({slug: req.params.slug});
//     res.status(200).send(post);
//   } catch (err) {
//     res.status(404).send(err);
//   }
// };
analystCtrl.updateAnalyst = async (req, res) => {
  const { initials } = req.body;
  try {
    await Analyst.findOneAndUpdate({ _id: req.params.id }, { initials });
    res.status(200).send({ message: "Analyst update successfully" });
  } catch (error) {
    res.status(500).send(error);
  }
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
