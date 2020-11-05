const { Schema, model } = require("mongoose");

let subtaskSchema = new Schema(
    {
        title: String,
        description: String,
        duedate: String,
        analyst: String,
        collaborator: String,
        parent: String,
        relatedsubtask: String,
        no_of_findings: Number,
        progress: Number,
    },
    {
        timestamps: true,
    }
);

const Subtask = model("Subtask", subtaskSchema);

module.exports = Subtask;