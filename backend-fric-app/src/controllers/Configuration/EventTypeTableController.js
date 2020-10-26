//Imports
const EventTypeTable = require("../../models/Configuration/EventTypeTableModel");

//Object
const eventTypeTableCtrl = {};

//Functions

eventTypeTableCtrl.getEventTypeTable = async (req, res) => {
  try {
    const typeTables = await EventTypeTable.find();
    if (typeTables) {
      res.json(typeTables); //need to change to .status(200).send(typeTables) after done testing with postman
    } else {
      res.status(404).send({ error: "Notes not found" });
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

eventTypeTableCtrl.createEventTypeTable = async (req, res) => {
  const newEventTypeTable = new EventTypeTable(req.body);
  try {
    await newEventTypeTable.save();
    res.json('create event type table!');
    res.status(200).send({ message: "Event Type Table Created" });
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
module.exports = eventTypeTableCtrl;