var getRequestHandle = require('./method/get');


var httpHandle = function(req, res) {
    next(req, res);
}

var next = function(req, res) {
    switch (req.method) {
        case 'GET':
            getRequestHandle(req, res);
            return;
        default:
            console.log('Request Method Unknown');
    }
}

module.exports = httpHandle;