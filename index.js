const winston = require("winston");

const logger = new winston.Logger({
    level: process.env.LOGGER_LEVEL || 'debug',
    transports: [
        new winston.transports.Console({
            timestamp: true
        })
    ]
});

e = new Error();
let file = e.stack.split('\n')[1];

const folder = file.match(/.*\/(.*)\//)[1];
const fn = folder + '/' + file.match(/(\w+\.\w+)/)[1];

logger.filters.push(function (level, msg, meta) {
    return fn + ': ' + msg;
});

module.exports = logger;
