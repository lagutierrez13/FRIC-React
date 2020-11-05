const { Schema, model } = require("mongoose");
// const slugify = require("slugify");

let systemSchema = new Schema(
    {
        systemname: String,
        systemdescription: String,
        assesslocation: String,
        roomnumber: String,
        eventrouter: String,
        eventswitch: String,
        testplan: String,
        no_of_findings: String,
        no_of_tasks: String,
        confidentiality: String,
        integrity: String,
        availability: String,
        progress: String,
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