const { Schema, model } = require("mongoose");
// const slugify = require("slugify");

let systemSchema = new Schema(
    {
        name: String,
        description: String,
        no_of_findings: String,
        no_of_tasks: String,
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
