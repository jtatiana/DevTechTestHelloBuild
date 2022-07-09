'use strict'
import { Joi, validate } from 'express-validation'

const login = validate({
  body: Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().regex(/[a-zA-Z0-9]{3,30}/).required()
  })
}, {}, {})

export default { login }
