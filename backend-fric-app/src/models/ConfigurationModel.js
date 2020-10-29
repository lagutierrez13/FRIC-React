const { Schema, model } = require("mongoose");
// const slugify = require("slugify");

let configurationSchema = new Schema(
  {
    tablename: String,
    required: Boolean,
    values: [String],
    // description: String,
    // no_of_findings: String
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

//Static methods
configurationSchema.statics.findByTableName = async (tablename) => {
  const configuration = await User.findOne({ tablename });
  if (configuration) {
    return configuration;
  } else {
    throw new Error({ error: "Unable to retrieve table" });
  }
};

// systemSchema.pre("validate", function(next) {
//     const system = this;

//     if(system.name) {
//       post.slug = slugify(system.name, { lower: true, strict: true });
//     }

//     next();
// })

const Configuration = model("Configuration", configurationSchema);

//export
module.exports = Configuration;

// const mongoose = require('mongoose');
//
// const Schema = mongoose.Schema;
//
// const loginSchema = new Schema({
//     analystname: {
//         type: String,
//         required: true,
//         unique: true,
//         trim: true,
//         minlength: 1
//     },
// }, {
//     timestamps: true,
// });
//
// const LoginModel = mongoose.model('User', loginSchema);
//
// module.exports = LoginModel;
