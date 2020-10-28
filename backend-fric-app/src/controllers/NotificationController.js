//Imports
const Notification = require("../models/NotificationModel");

//Object
//notificationCtrl 
const notificationCtrl = {};

//Functions

notificationCtrl.getNotifications = async (req, res) => {
  try {
    const notifications = await Notification.find();
    if (notifications) {
      res.json(notifications); //need to change to .status(200).send(notifications) after done testing with postman
    } else {
      res.status(404).send({ error: "Notifications not found" });
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

notificationCtrl.createNotification = async (req, res) => {
  const newNotification = new Notification(req.body);
  try {
    await newNotification.save();
    res.status(200).send({ message: "Notification Created" });
  } catch (error) {
    res.status(500).send(error);
  }
};

// notificationCtrl.getNotificationBySlug = async (req, res) => {
//   try {
//     const notification = await Notification.findOne({slug: req.params.slug});
//     res.status(200).send(notification);
//   } catch (err) {
//     res.status(404).send(err);
//   }
// };

//TODO: update with notification attributes
notificationCtrl.updateNotification = async (req, res) => {
  const { name, no_of_findings, no_of_tasks, description, type, version, assessdate, sctg, classification, declassificationdate, customername, organizationname } = req.body;
  try {
    await Notification.findOneAndUpdate(
      { _id: req.params.id },
      { name, no_of_findings, no_of_tasks, description, type, version, assessdate, sctg, classification, declassificationdate, customername, organizationname }
    );
    res.status(200).send({ message: "Notification update successfully" });
  } catch (error) {
    res.status(500).send(error);
  }
};

notificationCtrl.deleteNotification = async (req, res) => {
  try {
    await Notification.findOneAndDelete({ _id: req.params.id });
    res.status(200).send({ message: "Notification deleted successfully" });
  } catch (error) {
    res.status(500).send(error);
  }
};

//Export
module.exports = notificationCtrl;