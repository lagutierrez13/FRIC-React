const { Schema, model } = require("mongoose");
// const slugify = require("slugify");

let notificationSchema = new Schema(
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

const Notification = model("Notification", notificationSchema);

//export
module.exports = Notification;
