const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, printf } = format;

const myFormat = printf(({ level, message, label, timestamp }) => {
    return `${timestamp}  ${level}: ${message}`;
  });

  const logger = createLogger({
    format: combine(
      timestamp({format: 'YYYY-MM-DD HH:mm:ss'}),
      myFormat
    ),
    transports:[
      new transports.Console(),
      new transports.File({filename: 'combined.log'})
    ],
  })
      //
      // - Write all logs with importance level of `error` or less to `error.log`
      // - Write all logs with importance level of `info` or less to `combined.log`
      //
      // new winston.transports.File({ filename: 'error.log', level: 'error' }),
      // new winston.transports.File({ filename: 'combined.log' }),

module.exports = logger;