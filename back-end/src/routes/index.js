'use strict'

import userRouter from './user'
import express from 'express'

const app = express()

app.use('/user', userRouter)

export default app
