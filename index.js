const winston = require("winston");

const logger = new winston.Logger({
    level: process.env.LOGGER_LEVEL || 'debug',
    transports: [
        new winston.transports.Console({
            timestamp: true
        })
    ]
});

logger.setLoggerName = function(loggerName) {
    let ln = '';
    if(loggerName!=null) {
        ln = loggerName + ': ';
    }

    logger.filters = [function (level, msg, meta) {
        return ln + msg;
    }];
}

//gather default loggerName
let loggerName = null;
e = new Error();
const stacks = e.stack.split('\n');
stacks.forEach(function(line) {
    if (line.indexOf('swinston/index.js') == -1 && loggerName==null) {
        let folder = line.match(/.*\/(.*)\//);
        if (folder != null && folder.length > 1) {
            folder = folder[1];
            let fn = line.match(/(\w+\.\w+)/);
            if (fn != null && fn.length > 1) {
                loggerName = folder + '/' + fn[1];
                logger.setLoggerName(loggerName);
            }
        }
    }
});
if (loggerName==null) {
    console.debug('swinston: couldn\'t not get default logger name');
}

module.exports = logger;
