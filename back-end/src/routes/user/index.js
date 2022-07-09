'use strict'
import express from 'express'
import userController from './controllers'

const userRouter = express.Router()

userRouter.post(
  '/signIn',
  userController.signIn
)
userRouter.post(
  '/signUp',
  userController.signUp
)
userRouter.post(
  '/gitHubAuth',
  userController.gitHubAuth
)

export default userRouter
