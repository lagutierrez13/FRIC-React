const Validator = require("validator");
const isEmpty = require("is-empty");
module.exports = function validateLoginInput(data) {
  let errors = {};

  data.initials = !isEmpty(data.initials) ? data.initials : "";
  
  // Initials checks
  if(Validator.isEmpty(data.initials)){
      errors.initials = "Initials field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
