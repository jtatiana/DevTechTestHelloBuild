'use strict'
import { logger } from '../services/log.service.js'

const errorMiddleware = (error, req, res, next) => {
  try { // Verificamos si es parseable a object
    const e = JSON.parse(error.message)
    error.message = e.message
    error.status = e.status
    error.name = e.name
  } catch (_) {
    console.log('pasa derecho')
  }
  const errorObject = {
    status: error.status ?? error.statusCode ?? 500,
    name: error.name ?? error.title ?? 'UnkwnownError',
    message: error.message ?? 'Unkown Message',
    details: error.details ?? 'Unknown Details'
  }
  logger.error(error.error ?? error)

  return res.status(errorObject.status).json(errorObject)
}

export { errorMiddleware }
