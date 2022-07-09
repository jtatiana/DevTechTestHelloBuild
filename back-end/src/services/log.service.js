const { createLogger, format, transports } = require('winston')
const logger = createLogger({
  level: 'info',
  format: format.combine(
    format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss'
    }),
    format.errors({ stack: true }),
    format.splat(),
    format.json(),
    format.printf(info => `[${info.timestamp}][${info.level}]: ${info.message}`)
  ),
  transports: [
    new transports.File({
      filename: getErrorLogPath(),
      level: 'error',
      maxSize: 5120000,
      maxFiles: 5
    }),
    new transports.File({
      filename: getCombinedLogPath(),
      maxSize: 5120000,
      maxFiles: 5
    })
  ]
})
function getErrorLogPath() {
  return `logs/${process.env.NODE_ENV}/error.log`
}
function getCombinedLogPath() {
  return `logs/${process.env.NODE_ENV}/error.log`
}

if (process.env.NODE_ENV !== 'production') {
  logger.add(
    new transports.Console({
      format: format.combine(format.colorize(), format.simple())
    })
  )
}
export { logger }
