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

findingCtrl.updateFinding = async (req, res) => {
  const body = req.body;
  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide a body to update",
    });
  }
  Finding.findOne({ _id: req.params.id }, (err, finding) => {
    if (err) {
      return res.status(404).json({
        err,
        message: "Event not found!",
      });
    }
    finding.findingID = body.findingID;
    finding.hostname = body.hostname;
    finding.ipPort = body.ipPort;
    finding.description = body.description;
    finding.longDescription = body.longDescription;
    finding.title = body.title;
    finding.findingSystem = body.findingSystem;
    finding.findingTask = body.findingTask;
    finding.findingSubtask = body.findingSubtask;
    finding.findingAnalyst = body.findingAnalyst;
    finding.collaborator = body.collaborator;
    finding.posture = body.posture;
    finding.status = body.status;
    finding.classification = body.classification;
    finding.related = body.related;
    finding.type = body.type;
    finding.confidentiality = body.confidentiality;
    finding.integrity = body.integrity;
    finding.availability = body.availability;
    finding.mitigationBrief = body.mitigationBrief;
    finding.mitigationLong = body.mitigationLong;
    finding.relevance = body.relevance;
    finding.effectivenessRate = body.effectivenessRate;
    finding.impactLevel = body.impactLevel;
    finding.impactDescription = body.impactDescription;
    finding.severityCategoryCode = body.severityCategoryCode;
    finding.severityCategoryScore = body.severityCategoryScore;
    finding.vulnerabilitySeverity = body.vulnerabilitySeverity;
    finding.qualitativeVS = body.qualitativeVS;
    finding.risk = body.risk;
    finding.likelihood = body.likelihood;
    finding.confImpactSystem = body.confImpactSystem;
    finding.integImpactSystem = body.integImpactSystem;
    finding.availImpactSystem = body.availImpactSystem;
    finding.impactScore = body.impactScore;
    finding
      .save()
      .then(() => {
        return res.status(200).json({
          success: true,
          id: finding._id,
          message: "Finding updated!",
        });
      })
      .catch((error) => {
        return res.status(404).json({
          error,
          message: "Finding not updated!",
        });
      });
  });
};

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