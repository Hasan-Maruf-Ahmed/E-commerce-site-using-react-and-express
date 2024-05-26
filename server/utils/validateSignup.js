const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");

const validateSignup = (data) => {
  const schema = Joi.object({
    name: Joi.string()
      .pattern(/^[a-zA-Z\s]+$/)
      .min(3)
      .max(30)
      .required()
      .label("Name")
      .messages({
        "string.pattern.base": "Name can only contain letters and spaces",
        "string.empty": "Name is required",
        "string.min": "Name should have a minimum length of {#limit}",
        "string.max": "Name should have a maximum length of {#limit}",
        "any.required": "Name is required",
      }),
    phone: Joi.string()
      .pattern(/^[0-9]{11}$/)
      .required()
      .label("Phone")
      .messages({
        "string.pattern.base": "Phone number must be exactly 11 digits",
        "string.empty": "Phone is required",
        "any.required": "Phone is required",
      }),
    email: Joi.string().email().required().label("Email").messages({
      "string.email": "Please enter a valid email address",
      "string.empty": "Email is required",
      "any.required": "Email is required",
    }),
    password: passwordComplexity().required().label("Password").messages({
      "string.empty": "Password is required",
      "any.required": "Password is required",
    }),
  });
  return schema.validate(data);
};

module.exports = validateSignup;
