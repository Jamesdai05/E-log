const Joi = require("joi");

const validators = {
  createReportValidator: Joi.object({
    title: Joi.string().trim().label("title").required(),
    description: Joi.string().trim().label("Description").required(),
  }),

  updateReportValidator: Joi.object({
    title: Joi.string().trim().label("title").required(),
    description: Joi.string().label("Description").required(),
  }),

  updateReportValidator: Joi.object({
    title: Joi.string().trim().label("title").required(),
    description: Joi.string().label("Description").required(),
  }),
};

module.exports = validators;
