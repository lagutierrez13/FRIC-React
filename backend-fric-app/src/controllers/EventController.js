//Imports
const Event = require("../models/EventModel");

//Object
const eventCtrl = {};

//Functions

eventCtrl.getEvents = async (req, res) => {
  try {
    const events = await Event.find();
    if (events) {
      res.status(200).send(events);
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

eventCtrl.getEventBySlug = async (req, res) => {
  try {
    const event = await Event.findOne({slug: req.params.slug});
    res.status(200).send(event);
  } catch (err) {
    res.status(404).send(err);
  }
};

//TODO: update with event attributes
eventCtrl.updateEvent = async (req, res) => {
  const { image, title, description, markdown } = req.body;
  try {
    await Event.findOneAndUpdate(
      { _id: req.params.id },
      { image, title, description, markdown }
    );
    res.status(200).send({ message: "Event update successfully" });
  } catch (error) {
    res.status(500).send(error);
  }
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