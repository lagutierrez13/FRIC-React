const { Schema, model } = require("mongoose");
// const slugify = require("slugify");

//finding Schema
const findingSchema = new Schema(
  {
      findingID: String,
      hostname: String,
      ipPort: String,
      description: String,
      longDescription: String,
      title: String,
      findingSystem: String, //select only system, task, or subtask. never more than one
      findingTask: String,
      findingSubtask: String,
      findingAnalyst: String, //multiple selection
      collaborator: String, //multiple selection
      posture: String, //  {Insider, Insider-nearsider, Outsider, Nearsider, Nearsider-outsider}
      status: String, // {Open, Closed}
      classification: String, //Vulnerability,information
      related: [String], //multiple selection for related findings
      type: String, //{Credentials Complexity, Manufacturer Default, Creds, Lack of Authentication, Plain Text Protocols, Plain Text Web Login, Encryption, Authentication Bypass, Port Security, Access Control, Least Privilege, Privilege Escalation, Missing Patches, Physical Security, Information Disclosure}
      progress: Number,
      confidentiality: String, //{Low, Medium, High, Information
      integrity: String, //{Low, Medium, High, Information
      availability: String, //{Low, Medium, High, Information
      mitigationBrief: String,
      mitigationLong: String,
      relevance: String, //{Confirmed, Expected, Anticipated, Predicted Possible}
      effectivenessRate: String, //  {Very high (10), High (7-9), Moderate (4-6), Low (1-3), Very low (0)}
      impactLevel: String, //{VH, H, M, L, VL, Information}
      impactDescription: String,
      severityCategoryCode: String, //; {I, II, III}
      severityCategoryScore: Number, //derived
      vulnerabilitySeverity: Number, //derived. The system shall return the following: 10 if the severity category code is I; 7 if the severity category code is II; 4 if the severity category code is III. (See Table 21)
      quantitativeVulnerability: String, //derived
      risk: String, //derived. The system shall return the following: If impact score = 0, risk is Info. Otherwise, if impact score != 0, determine risk using likelihood and impact level (See Table 24)
      likelihood: String, //derived.  The system shall return the following: If impact score = 0, likelihood is Info. Otherwise, if impact score != 0 and determine the likelihood using relevance of threat and quantitative vulnerability severity (See Table 25)
      confImpactSystem: String, //derived
      integImpactSystem: String, //derived
      availImpactSystem: String, //derived
      impactScore: Number //derived
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