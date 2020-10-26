const { Schema, model } = require("mongoose");
// const slugify = require("slugify");

let eventRulesTableSchema = new Schema(
    {
        required: Boolean,
        values: [String]
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

const EventRulesTable = model("EventRulesTable", eventRulesTableSchema);

//export
module.exports = EventRulesTable;
