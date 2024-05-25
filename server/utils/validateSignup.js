const Joi = require('joi');
const passwordComplexity = require('joi-password-complexity');

const validateSignup = (data) => {
    const schema = Joi.object({
        name: Joi.string().alphanum().min(3).max(30).required().label("Name"),
        phone: Joi.string().pattern(/^[0-9]{11}$/).required().label("Phone"),
        email: Joi.string().email().required().label("Email"),
        password: passwordComplexity().required().label("Password"),
    });
    return schema.validate(data);
}

module.exports = validateSignup;