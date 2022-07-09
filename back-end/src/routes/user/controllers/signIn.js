'use strict'
import bcrypt from 'bcrypt'
import models from '../../../connection/models/index'
import jwtService from '../../../services/jwt.service'

const WRONG_DATA = '{"status": 400, "name": "Wrong Data", "message": "User or password incorrect"}'

async function signIn(req, res, next) {
  try {
    const { email, password } = req.body
    const userFound = await findUser(email)
    UserFound(userFound)
    await verifyPassword(password, userFound.password)
    const createTokenParams = defineTokenParams(userFound)
    const token = jwtService.createToken(createTokenParams)
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

async function verifyPassword(inputPassword, userPassword) {
  const canAccess = await bcrypt.compare(inputPassword, userPassword)
  if (!canAccess) {
    throw new Error(WRONG_DATA)
  }
}
function findUser(email) {
  return models.users.findOne({
    attributes: ['uuid', 'email', 'password'],
    where: { email: email }
  })
}
function UserFound(userFound) {
  if (!(userFound instanceof models.users)) {
    throw new Error(WRONG_DATA)
  }
}
export { signIn }
