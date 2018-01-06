# swinston

Winston based logger for NodeJS applications with some default options set (Console only, timestamp + loggerName prefix and log level set by ENV).

## Features

Adds 'setLoggerName(loggerName)' to winston so that it is possible to prefix all log messages by a loggerName. If not defined, it tries to get the current file name as logger name.

Created mainly for container based NodeJS applications, so only Console is activated. Configure log level by defining enviroment variable LOGGER_LEVEL to one of the default winston log levels (info, warn, error, debug, silly etc).

An winston object instance is exported by this module, so all its API is still available.

## Usage example
```
const logger = require('swinston');

//logging using default loggername
logger.debug('DEBUGGINGGGG', { a: 'test', b: { c: 123, d: 5454 } });
//outputs 2018-01-06T14:19:49.133Z - debug: example/test.js: DEBUGGINGGGG a=test, c=123, d=5454

//logging using custom loggername
logger.setLoggerName('my-logger');
logger.info('I am here!');
//outputs 2018-01-06T14:19:49.134Z - info: my-logger: I am here!
```
