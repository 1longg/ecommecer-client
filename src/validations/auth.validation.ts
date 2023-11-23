import Joi from "joi";

export const validateSignIn = Joi.object({
  username: Joi.string().alphanum().min(3).max(30).required().messages({
    "string.base": "Username should be a type of 'text'",
    "string.empty": "Username cannot be an empty field",
    "string.min": "Username should have a minimum length of {#limit}",
    "string.max": "Username should have a maximum length of {#limit}",
  }),
  password: Joi.string()
    .pattern(new RegExp("^[a-zA-Z0-9]{6,}$"))
    .required()
    .messages({
      "string.base": "Password should be a type of 'text'",
      "string.empty": "Password cannot be an empty field",
      "string.pattern.base": "Password must be at least 3 characters long",
    }),
});

export const validateSignUp = Joi.object({
  username: Joi.string().alphanum().min(3).max(30).required().messages({
    "string.base": "Username should be a type of 'text'",
    "string.empty": "Username cannot be an empty field",
    "string.min": "Username should have a minimum length of {#limit}",
    "string.max": "Username should have a maximum length of {#limit}",
  }),
  password: Joi.string()
    .pattern(new RegExp("^[a-zA-Z0-9]{6,}$"))
    .required()
    .messages({
      "string.base": "Password should be a type of 'text'",
      "string.empty": "Password cannot be an empty field",
      "string.pattern.base": "Password must be at least 3 characters long",
    }),
  email: Joi.string().email({ tlds: { allow: false } }),
  firstName: Joi.string().alphanum().min(3).max(30),
  lastName: Joi.string().alphanum().min(3).max(30),
  confirmPassword: Joi.any()
    .equal(Joi.ref("password"))
    .required()
    .label("Confirm password")
    .messages({ "any.only": "{{#label}} does not match" }),
});
