const { Schema, model } = require("mongoose");
// const slugify = require("slugify");

//finding Schema


const findingSchema = new Schema(
  {
      findingID: String,
      title: String,
      findingSystem: String,
      findingTask: String,
      findingSubtask: String,
      findingAnalyst: String,
      status: String,
      classification: String,
      type: String,
      risk: String,
      // slug: {
      //   type: String,
      //   required: true,
      //   unique: true
      // }
    },
  
    {
      timestamps: true,
    }
);

// findingSchema.pre("validate", function(next) {
//   const finding = this;
  
//   if(finding.name) {
//     post.slug = slugify(finding.name, { lower: true, strict: true });
//   }

//   next();
// })

const Finding = model("finding", findingSchema);
//Export
module.exports = Finding;