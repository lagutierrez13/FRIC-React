//Imports
const System = require("../models/SystemModel");

//Object
const systemCtrl = {};

//Functions

systemCtrl.getSystems = async (req, res) => {
  try {
    const systems = await System.find();
    if (systems) {
      res.json(systems); //need to change to .status(200).send(systems) after done testing with postman
    } else {
      res.status(404).send({ error: "Notes not found" });
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

systemCtrl.createSystem = async (req, res) => {
  const newSystem = new System(req.body);
  try {
    await newSystem.save();
    res.json('create system!');
    res.status(200).send({ message: "System Created" });
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

systemCtrl.updateSystem = async (req, res) => {
  const { name,description,no_of_findings } = req.body;
  try {
    await System.findOneAndUpdate(
      { _id: req.params.id },
      {  name, description, no_of_findings }
    );
    res.status(200).send({ message: "System update successfully" });
  } catch (error) {
    res.status(500).send(error);
  }
};

systemCtrl.deleteSystem = async (req, res) => {
  try {
    await System.findOneAndDelete({ _id: req.params.id });
    res.status(200).send({ message: "System deleted successfully" });
  } catch (error) {
    res.status(500).send(error);
  }
};

//Export
module.exports = systemCtrl;