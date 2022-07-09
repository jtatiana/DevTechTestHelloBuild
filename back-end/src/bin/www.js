#!/usr/bin/env node
'use strict'
/**
 * Dependencies
 */
import debug from 'debug'
import http from 'http'
import https from 'https'
import dotenv from 'dotenv'
import fs from 'fs'
import path from 'path'
dotenv.config()

let app
let port
let server
const NODE_ENV = process.env.NODE_ENV
run()
async function run () {
  let runner = runSSL
  switch (NODE_ENV) {
    case 'production':
      dotenv.config({ path: './env/production.env' })
      break
    case 'testing':
      dotenv.config({ path: './env/testing.env' })
      break
    case 'development':
      dotenv.config({ path: './env/development.env' })
      runner = runDevelopment
      break
    default:
      throw Error('Falló la inicialización del server')
  }
  app = (await import('../app.js')).app
  runner()
  console.log(`Server running in ${NODE_ENV} mode at port ${port}`)
}
function runSSL () {
  const SSL_CERT = fs.readFileSync(getSSLCertPath())
  const SSL_KEY = fs.readFileSync(getSSLKeyPath())
  port = normalizePort()
  app.set('port', port)
  server = https.createServer({
    key: SSL_KEY,
    cert: SSL_CERT
  }, app)
  server.listen(port)
  server.on('error', onErrorSSL)
  server.on('listening', onListening)
}
function runDevelopment () {
  port = normalizePort()
  server = http.createServer(app)
  server.listen(port)
  server.on('error', onError)
  server.on('listening', onListening)
}
function getSSLKeyPath () {
  return path.join(process.env.HOME, process.env.SSL_KEY)
}
function getSSLCertPath () {
  return path.join(process.env.HOME, process.env.SSL_CERT)
}
function normalizePort (val) {
  const port = parseInt(process.env.PORT || '3002', 10)
  if (port >= 0) {
    // port number
    return port
  }
  return false
}
function onError (error) {
  if (error.syscall !== 'listen') {
    throw error
  }

  const bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges')
      process.exit(1)
      // break
    case 'EADDRINUSE':
      console.error(bind + ' is already in use')
      process.exit(1)
      // break
    default:
      throw error
  }
}
function onListening () {
  const addr = server.address()
  const bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port
  debug('Listening on ' + bind)
}

function onErrorSSL (error) {
  if (error.syscall !== 'listen') {
    throw error
  }

  const bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges')
      process.exit(1)
      // break
    case 'EADDRINUSE':
      console.error(bind + ' is already in use')
      process.exit(1)
      // break
    default:
      throw error
  }
}
