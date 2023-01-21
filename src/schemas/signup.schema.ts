import joi from "../../node_modules/joi/lib/index.js";

export const signUpSchema = joi.object({
  name: joi.string().min(3).max(50).required(),
  email: joi.string().min(10).max(50).required(),
  password: joi.string().min(4).max(20).required(),
  confirmPassword: joi.string().min(4).max(20).required(),
});
