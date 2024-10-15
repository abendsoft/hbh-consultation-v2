import Joi from 'joi'

export const createUserSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(9).max(32).required(),
})

export const updateUserSchema = Joi.object({
    password: Joi.string().min(9).max(32).required(),
})
