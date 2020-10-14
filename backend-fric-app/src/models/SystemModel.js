const { Schema, model } = require("mongoose");
const slugify = require("slugify");

let System = new Schema(
    {
        title: String,
        description: String,
        no_of_findings: String,
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

systemSchema.pre("validate", function(next) {
    const system = this;
    
    if(system.title) {
      post.slug = slugify(system.title, { lower: true, strict: true });
    }
  
    next();
})

const Event = model("System", systemSchema);

module.exports = mongoose.model('System', System);