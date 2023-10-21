const { JSONCookie } = require("cookie-parser");
const Joi = require("joi");

const validators = {
  registerValidator: Joi.object({
    username: Joi.string().min(3).max(30).trim().label("Username").required(),
    email: Joi.string()
      .trim()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } }) //to check the domain segment and the top-level domain for the com and net.
      .label("Email")
      .required(),
    password: Joi.string().min(8).label("Password").required(),
    confirmPassword: Joi.string()
      .equal(Joi.ref("password"))
      .required()
      .label("Confirm password")
      .messages({ "any.only": "{{#label}} does not match" }),
  }),

  loginValidator: Joi.object({
    email: Joi.string()
      .trim()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
      .label("Email")
      .required(),
    password: Joi.string().min(4).label("Password").required(),
  }),
};

module.exports = validators;
