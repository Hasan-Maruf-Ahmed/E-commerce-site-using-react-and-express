const Joi = require('joi');
const passwordComplexity = require('joi-password-complexity');

const validateLogin = (data) => {
    const schema = Joi.object({
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
}

module.exports = validateLogin;