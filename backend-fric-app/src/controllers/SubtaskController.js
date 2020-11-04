//Imports
const Subtask = require("../models/SubtaskModel");

//Object
const subtaskCtrl = {};

//Functions

subtaskCtrl.getSubtasks = async (req, res) => {
  try {
    const subtasks = await Subtask.find();
    if (subtasks) {
      res.json(subtasks);
    } else {
      res.status(404).send({ error: "Notes not found" });
    }
  } catch (error) {
    res.status(500).send(eror);
  }
};

subtaskCtrl.createSubtask = async (req, res) => {
  const newSubtask = new Subtask(req.body);
  try {
    await newSubtask.save();
    res.json("Create Subtask");
    res.status(200).send({ message: "Subtask Created" });
  } catch (error) {
    res.status(500).send(error);
  }
};

subtaskCtrl.updateSubtask = async (req, res) => {
  const body = req.body;
  if (!body) {
    return res.status(400).json({
      success: false,
      error: "No body to update",
    });
  }
  Subtask.findOne({ _id: req.params.id }, (err, subtask) => {
    if (err) {
      return res.status(404).json({
        err,
        message: "Subtask not found",
      });
    }

    subtask.title = body.subtasktitle;
    subtask.description = body.subtaskdescription;
    subtask.duedate = body.duedate;
    subtask.analyst = body.analyst;
    subtask.collaborator = body.collaborator;
    subtask.parent = body.parent;
    subtask.relatedsubtask = body.relatedsubtask;
    subtask.progress = body.subtaskprogreess;
    subtask
      .save()
      .then(() => {
        return res.status(200).json({
          success: true,
          id: subtask._id,
          message: "Subtask updated",
        });
      })
      .catch((error) => {
        return res.status(404).json({
          error,
          message: "Subtask not updated",
        });
      });
  });
};

subtaskCtrl.updateProgress = async (req, res) => {
  const body = req.body;
  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide a body to update",
    });
  }
  Subtask.findOne({ _id: req.params.id }, (err, subtask) => {
    if (err) {
      return res.status(404).json({
        err,
        message: "Subtask not found!",
      });
    }
    subtask.progress = body.progress;
    subtask
      .save()
      .then(() => {
        return res.status(200).json({
          success: true,
          id: subtask._id,
          message: "Subtask updated!",
        });
      })
      .catch((error) => {
        return res.status(404).json({
          error,
          message: "Subtask not updated!",
        });
      });
  });
};

subtaskCtrl.deleteSubtask = async (req, res) => {
  try {
    await Subtask.findOneAndDelete({ _id: req.params.id });
    res.status(200).send({ message: "Subtask Deleted" });
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = subtaskCtrl;
