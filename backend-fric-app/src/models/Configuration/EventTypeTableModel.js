const { Schema, model } = require("mongoose");
// const slugify = require("slugify");

let eventTypeTableSchema = new Schema(
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

const EventTypeTable = model("EventTypeTable", eventTypeTableSchema);

//export
module.exports = EventTypeTable;