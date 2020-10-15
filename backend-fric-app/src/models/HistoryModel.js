const { Schema, model } = require("mongoose");
// const slugify = require("slugify");

let historySchema = new Schema(
    {
        action: String,
        analyst: String,
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

// historySchema.pre("validate", function(next) {
//     const history = this;
    
//     if(history.name) {
//       post.slug = slugify(history.name, { lower: true, strict: true });
//     }
  
//     next();
// })

const History = model("History", historySchema);

//export
module.exports = History;
