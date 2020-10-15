const { Schema, model } = require("mongoose");
// const slugify = require("slugify");

let systemSchema = new Schema(
    {
        systemname: "",
        systemdescription: "",
        assesslocation: "",
        roomnumber: "",
        eventrouter: "",
        eventswitch: "",
        testplan: "",
        no_of_findings: "",
        no_of_tasks: "",
        progress: "",
        // slug: {
        //     type: String,
        //     required: true,
        //     unique: true
        // }
    },
    {
        timestamps: true,
    }
);

// systemSchema.pre("validate", function(next) {
//     const system = this;
    
//     if(system.name) {
//       post.slug = slugify(system.name, { lower: true, strict: true });
//     }
  
//     next();
// })

const System = model("System", systemSchema);

//export
module.exports = System;
