'use strict'
import bcrypt from 'bcrypt'
import jwtService from '../../../services/jwt.service'
import models from '../../../connection/models/index'

async function signUp(req, res, next) {
  try {
    console.log(req.body)
    const { email, password } = req.body
    const userFound = await searchUser(email)
    isUserFound(userFound)
    const encryptedPassword = await bcrypt.hash(password, 10)
    const createdUser = await models.users.create({ email, password: encryptedPassword })
    const createdTokenParams = defineTokenParams(createdUser)
    const token = jwtService.createToken(createdTokenParams)
    const authPage = `https://github.com/login/oauth/authorize?scope=${process.env.GIT_SCOOP}&client_id=${process.env.GIT_CLIENT_ID}`
    return res.status(200).send({ token, authPage })
  } catch (e) {
    e.error = e
    next(e)
  }
}
function defineTokenParams(userFound) {
  return {
    email: userFound.email,
    uuid: userFound.uuid
  }
}
function searchUser(email) {
  return models.users.findOne({
    where: { email }
  })
}
function isUserFound(userFound) {
  if ((userFound instanceof models.users)) {
    throw new Error('{"status": 400, "name": "User exists", "message": "This user is already registered"}')
  }
}

export { signUp }
