const { Schema, model } = require("mongoose");

let subtaskSchema = new Schema(
    {
        subtasktitle: String,
        subtaskdescription: String,
        subtaskprogress: Number,
        subtaskduedate: String,
        subtaskanalyst: String,
        subtaskcollaborator: String,
        subtaskparenttask: String,
        subtaskrelatedsubtasks: String,
    },
    {
        timestamps: true,
    }
);

const Subtask = model("Subtask", subtaskSchema);

module.exports = Subtask;