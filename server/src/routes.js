const Router = require('restify-router').Router,
    routes = new Router()

routes.get('/', (req, res, next) => {
    res.send('OK')
})

module.exports = routes