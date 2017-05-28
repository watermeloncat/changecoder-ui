const env = require('minimist')(process.argv.slice(2)).env || "development";

module.exports = env === "development" ? require('./build/dev') : require('./build/prod');