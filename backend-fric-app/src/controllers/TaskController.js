//Imports
const Task = require("../models/Taskmodel");

//Object
const taskCtrl = {};

//Functions

taskCtrl.getTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        if (systems) {
            res.json(tasks);
        } else {
            res.status(404).send({ error: "Notes not found"});
        }
    } catch (error) {
        res.status(500).send(error);
    }
};

taskCtrl.createTask = async (req, res) => {
    const newTask = new Task(req.body);
    try{
        await newTask.save();
        res.json('Create Task');
        res.status(200).send({ message: "Task Created"});
    } catch (error) {
        res.status(500).send(error);
    }
};

taskCtrl.updateTask = async (req, res) => {
    const body = req.body;
    if (!body) {
        return res.status(400).json({
            success:false,
            error: "No body to update",
        });
    }
    Task.findOne({_id: req.params.id }, (err, task) => {
        if (err) {
            return res.status(404).json({
                err,
                message: "Task not found",
            });
        }

        task.tasktitle = body.tasktitle;
        task.taskdescription = body.taskdescription;
        task.taskduedate = body.taskduedate;
        task.tasksystem = body.tasksystem;
        task.taskpriority = body.taskpriority;
        task.taskanalyst = body.taskanalyst;
        task.taskcollabotator = body.taskcollabotator;
        task.relatedtasks = body.relatedtasks;
        task
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: task._id,
                    message: "Task updated",
                });
            })
            .catch((error) => {
                return res.status(404).json({
                    error,
                    message: "Task not updated",
                });
            });
    });
};

taskCtrl.updateProgress = async (req, res) => {
    const body = req.body;
    if (!body) {
      return res.status(400).json({
        success: false,
        error: "You must provide a body to update",
      });
    }
    Task.findOne({ _id: req.params.id }, (err, task) => {
      if (err) {
        return res.status(404).json({
          err,
          message: "Task not found!",
        });
      }
      task.progress = body.progress;
      task
        .save()
        .then(() => {
          return res.status(200).json({
            success: true,
            id: task._id,
            message: "Task updated!",
          });
        })
        .catch((error) => {
          return res.status(404).json({
            error,
            message: "Task not updated!",
          });
        });
    });
  };

taskCtrl.deleteTask = async (req, res) => {
    try {
        await Task.findOneAndDelete({_id: req.params.id });
        res.status(200).send({ message: "Task Deleted"});
    } catch (error) {
        res.status(500).send(error);
    } 
};

module.exports = taskCtrl;
