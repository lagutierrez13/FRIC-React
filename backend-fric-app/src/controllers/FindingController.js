//Imports

const Finding = require("../models/FindingModel");

//Object
const findingCtrl = {};

//Functions

findingCtrl.getFindings = async (req, res) => {
  try {
    const findings = await Finding.find();
    if (findings) {
      res.json(findings); //need to change to .status(200).send(finding) after done testing with postman
    } else {
      res.status(404).send({ error: "Findings not found" });
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

findingCtrl.createFinding = async (req, res) => {
  const newFinding = new Finding(req.body);
  try {
    await newFinding.save();
    res.status(200).send({ message: "Finding Created" });
  } catch (error) {
    res.status(500).send(error);
  }
};

// findingCtrl.getFindingBySlug = async (req, res) => {
//   try {
//     const  = await .findOne({slug: req.params.slug});
//     res.status(200).send();
//   } catch (err) {
//     res.status(404).send(err);
//   }
// };

//TODO: update with  attributes
findingCtrl.updateFinding = async (req, res) => {
  const { findingID, title, findingSystem, findingTask, findingSubtask, findingAnalyst, status, classification, type, risk} = req.body;
  try {
    await Finding.findOneAndUpdate(
      { _id: req.params.id },
      { findingID, title, findingSystem, findingTask, findingSubtask, findingAnalyst, status, classification, type, risk}
    );
    res.status(200).send({ message: "Finding update successfully" });
  } catch (error) {
    res.status(500).send(error);
  }
};

findingCtrl.deleteFinding = async (req, res) => {
  try {
    await Finding.findOneAndDelete({ _id: req.params.id });
    res.status(200).send({ message: "Finding deleted successfully" });
  } catch (error) {
    res.status(500).send(error);
  }
};

//Export
module.exports = findingCtrl;