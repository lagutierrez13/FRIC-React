const Validator = require("validator");
const isEmpty = require("is-empty");
module.exports = function validateRegisterInput(data) {
  let errors = {};

  data.initials = !isEmpty(data.initials) ? data.initials : "";

  // Initials checks
  if (Validator.isEmpty(data.initials)) {
    errors.initials = "Initials field is required";
  }
  // if (Validator.isLength(data.initials, { min: 1, max: 3 })) {
  //   errors.initials = "Initials must be 2 characters";
  // }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
