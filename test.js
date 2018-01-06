const logger = require('./index.js');

//logging using default loggername
console.log('>>> LOGGING USING DEFAULT LOGGERNAME');
logger.debug('DEBUGGINGGGG', { a: 'test', b: { c: 123, d: 5454 } });
logger.silly('SILLLY');

logger.profile('a');
logger.profile('b');

logger.info('INFO111');

//logging using custom loggername
console.log('>>> LOGGING USING CUSTOM LOGGERNAME "my-logger"');
logger.setLoggerName('my-logger');
logger.info('I am here!');


