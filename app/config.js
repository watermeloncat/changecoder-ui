module.exports = {
    web: {
        rootDir: __dirname,
        port: process.env.PORT || 8080,
        host: '127.0.0.1',
        cacheMaxAge: 10,
        expired: 10 * 1000
    }
}