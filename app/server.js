var http = require('http');

var config = require('./config');
var httpHandle = require('./src/handle');

http.createServer(httpHandle).listen(config.web.port, config.web.host, () => {
    console.log(`server: http:\\\\${config.web.host}:${config.web.port}`);
});