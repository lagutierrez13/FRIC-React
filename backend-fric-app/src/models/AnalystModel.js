const { Schema, model } = require("mongoose");
// const slugify = require("slugify");

let analystSchema = new Schema(
  {
    initials: String,
    first: String,
    last: String,
    title: String,
    ip: String,
    isLead: Boolean,
    progress: Number,
    // tokens: [
    //   {
    //     token: {
    //       type: String,
    //       require: true,
    //     },
    //   },
    // ],
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
analystSchema.statics.findByCredentials = async (initials) => {
  const analyst = await User.findOne({ initials });
  if (analyst) {
    return analyst;
  } else {
    throw new Error({ error: "Unable to login" });
  }
};

analystSchema.methods.generateAuthToken = async function () {
  const analyst = this;

  const token = jwt.sign(
    { _id: analyst._id.toString() },
    process.env.AUTHTOKENSTRING
  );
  analyst.tokens = analyst.tokens.concat({ token });

  try {
    await analyst.save();
  } catch (error) {
    throw new Error(error);
  }

  return token;
};

// systemSchema.pre("validate", function(next) {
//     const system = this;

//     if(system.name) {
//       post.slug = slugify(system.name, { lower: true, strict: true });
//     }

//     next();
// })

const Analyst = model("Analyst", analystSchema);

//export
module.exports = Analyst;

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
