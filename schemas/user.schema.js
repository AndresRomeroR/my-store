const Joi = require('joi');

const id = Joi.string().uuid();
const username = Joi.string().min(3).max(15);
const email = Joi.string().email();
const avatar = Joi.string().uri();
const password = Joi.string().min(3).max(15);

const createUserSchema = Joi.object({
  username: username.required(),
  email: email.required(),
  avatar: avatar.required(),
  password: password.required()
});

const updateUserSchema = Joi.object({
  username: username,
  email: email,
  avatar: avatar,
  password: password
});

const getUserSchema = Joi.object({
  id: id.required(),
});

module.exports = { createUserSchema, updateUserSchema, getUserSchema }
