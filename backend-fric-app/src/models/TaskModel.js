const { Schema, model } = require("mongoose");

let taskSchema = new Schema(
    {
        tasktitle: String,
        taskdescription: String,
        taskduedate: String,
        tasksystem: String,
        taskpriority: String,
        taskanalyst: String,
        taskcollaborator: String,
        relatedtasks: String,
    },
    {
        timestamps: true,
    }
);

const Task = model("Task", taskSchema);

//export
module.exports = Task;