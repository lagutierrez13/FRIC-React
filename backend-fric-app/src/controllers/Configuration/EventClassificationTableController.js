//Imports
const EventClassificationTable = require("../models/Configuration/EventClassificationTableModel");

//Object
const eventClassificationTableCtrl = {};

//Functions

eventClassificationTableCtrl.getEventClassificationTable = async (req, res) => {
  try {
    const classificationTables = await EventClassificationTable.find();
    if (classificationTables) {
      res.json(classificationTables); //need to change to .status(200).send(classificationTables) after done testing with postman
    } else {
      res.status(404).send({ error: "Notes not found" });
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

eventClassificationTableCtrl.createEventClassificationTable = async (req, res) => {
  const newEventClassificationTable = new EventClassificationTable(req.body);
  try {
    await newEventClassificationTable.save();
    res.json('create event classificatin table!');
    res.status(200).send({ message: "Event Classification Table Created" });
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

//Export
module.exports = systemCtrl;