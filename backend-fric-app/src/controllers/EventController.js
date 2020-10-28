//Imports
const Event = require("../models/EventModel");

//Object
const eventCtrl = {};

//Functions

eventCtrl.getEvents = async (req, res) => {
  try {
    const events = await Event.find();
    if (events) {
      res.json(events); //need to change to .status(200).send(events) after done testing with postman
    } else {
      res.status(404).send({ error: "Events not found" });
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

eventCtrl.createEvent = async (req, res) => {
  const newEvent = new Event(req.body);
  try {
    await newEvent.save();
    res.status(200).send({ message: "Event Created" });
  } catch (error) {
    res.status(500).send(error);
  }
};

// eventCtrl.getEventBySlug = async (req, res) => {
//   try {
//     const event = await Event.findOne({slug: req.params.slug});
//     res.status(200).send(event);
//   } catch (err) {
//     res.status(404).send(err);
//   }
// };

//TODO: update with event attributes
// eventCtrl.updateEvent = async (req, res) => {
//   const { name, no_of_findings, no_of_tasks, description, type, version, assessdate, sctg, classification, declassificationdate, customername, organizationname } = req.body;
//   try {
//     await Event.findOneAndUpdate(
//       { _id: req.params.id },
//       { name, no_of_findings, no_of_tasks, description, type, version, assessdate, sctg, classification, declassificationdate, customername, organizationname }
//     );
//     res.status(200).send({ message: "Event update successfully" });
//   } catch (error) {
//     res.status(500).send(error);
//   }
// };

eventCtrl.updateEvent = async (req, res) => {
  const body = req.body;
  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide a body to update",
    });
  }
  Event.findOne({ _id: req.params.id }, (err, event) => {
    if (err) {
      return res.status(404).json({
        err,
        message: "Event not found!",
      });
    }
    event.name = body.name;
    event.description = body.description;
    event.type = body.type;
    event.version = body.version;
    event.assessdate = body.assessdate;
    event.sctg = body.sctg;
    event.classification = body.classification;
    event.declassificationdate = body.declassificationdate;
    event.customername = body.customername;
    event.organizationname = body.organizationname;
    event
      .save()
      .then(() => {
        return res.status(200).json({
          success: true,
          id: event._id,
          message: "Event updated!",
        });
      })
      .catch((error) => {
        return res.status(404).json({
          error,
          message: "Event not updated!",
        });
      });
  });
};

eventCtrl.deleteEvent = async (req, res) => {
  try {
    await Event.findOneAndDelete({ _id: req.params.id });
    res.status(200).send({ message: "Event deleted successfully" });
  } catch (error) {
    res.status(500).send(error);
  }
};

//Export
module.exports = eventCtrl;
