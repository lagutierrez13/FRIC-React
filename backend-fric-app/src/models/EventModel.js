const { Schema, model } = require("mongoose");

// const slugify = require("slugify");

//event Schema


const eventSchema = new Schema(
  {
      name: {
        type: String,
        
      },
      description: String,
      no_of_findings: String,
      no_of_systems: String,
      type: String,
      version: String,
      assessdate: String,
      sctg: String,
      classification: String,
      declassificationdate: String,
      customername: String,
      organizationname: String, 
      
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

// eventSchema.pre("validate", function(next) {
//   const event = this;
  
//   if(event.name) {
//     post.slug = slugify(event.name, { lower: true, strict: true });
//   }

//   next();
// })

const Event = model("Event", eventSchema);

//Export
module.exports = Event;