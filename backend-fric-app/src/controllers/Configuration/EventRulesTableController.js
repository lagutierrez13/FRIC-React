//Imports
const EventRulesTable = require("../../models/Configuration/EventRulesTableModel");

//Object
const eventRulesTableCtrl = {};

//Functions

eventRulesTableCtrl.getEventRulesTable = async (req, res) => {
  try {
    const rulesTables = await EventRulesTable.find();
    if (rulesTables) {
      res.json(rulesTables); //need to change to .status(200).send(rulesTables) after done testing with postman
    } else {
      res.status(404).send({ error: "Notes not found" });
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

eventRulesTableCtrl.createEventRulesTable = async (req, res) => {
  const newEventRulesTable = new EventRulesTable(req.body);
  try {
    await newEventRulesTable.save();
    res.json('create event rules table!');
    res.status(200).send({ message: "Event Rules Table Created" });
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
module.exports = eventRulesTableCtrl;