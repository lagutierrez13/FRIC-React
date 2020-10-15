const { Schema, model } = require("mongoose");
// const slugify = require("slugify");

let analystSchema = new Schema(
    {
        initials: String,
        ip: String,
        isLead: Boolean,
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
//     username: {
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