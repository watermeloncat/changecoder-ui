var url = require('url');
var path = require('path');
var fs = require('fs');

var config = require('../../../config');
var contentTypeMap = require('../../constants').contentTypeMap;

var getRequestHandle = function (req, res) {
    mixinHandle(req, res);
}

var mixinHandle = function (req, res) {
    var pathname = url.parse(req.url).pathname;
    if (pathname === '/') {
        pathname='index.html';
    }
    var fileSuffix = path.extname(pathname);
    if (fileSuffix && contentTypeMap[fileSuffix]) {
        fs.stat(path.join(config.web.rootDir, pathname), function (err, stat) {
            var lastModified = stat.mtime.toUTCString();
            if (lastModified === req.headers['if-modified-since']) {
                res.writeHead(304, 'Not Modified');
                res.end();
            } else {
                fs.readFile(path.join(config.web.rootDir, pathname), function (err, file) {
                    if (file) {
                        var expires = new Date();
                        expires.setTime(expires.getTime() + config.web.expired);
                        res.setHeader('Expires', expires.toUTCString());
                        res.setHeader('Cache-Control', `max-age=${config.web.cacheMaxAge}`);
                        res.setHeader('Last-Modified', lastModified);
                        // res.setHeader('ETag', hash);
                        res.writeHead(200, { 'Content-Type': contentTypeMap[fileSuffix] })
                        res.end(file);
                    }
                });
            }
        });
    }
}

module.exports = getRequestHandle;