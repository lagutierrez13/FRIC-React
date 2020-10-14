const { Schema, model } = require("mongoose");
const slugify = require("slugify");

//event Schema

this.state = {
  name: "",
  description: "",
  type: "",
  version: "",
  assessdate: "",
  sctg: "",
  classification: "",
  declassificationdate: "",
  customername: "",
};

const eventSchema = new Schema(
  {
    name: {
      type: String,
      required: true, 
    },
    description: String,
    type: String,
    version: String,
    assessdate: String,
    sctg: "",
    classification: "",
    declassificationdate: "",
    customername: "",
    organizationname: "", 
    slug: {
      type: String,
      required: true,
      unique: true
    }
  },
  
  {
    timestamps: true,
  }
);

eventSchema.pre("validate", function(next) {
  const event = this;
  
  if(event.title) {
    post.slug = slugify(event.title, { lower: true, strict: true });
  }

  next();
})

const Event = model("Event", eventSchema);

//Export
module.exports = Event;