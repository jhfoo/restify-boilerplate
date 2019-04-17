const Config = require('./config'),
    log4js = require('log4js'),
    logger = log4js.getLogger()

logger.level = Config.log4js.level

const restify = require('restify')
    server = restify.createServer()

require('./routes').applyRoutes(server)

server.listen(Config.service.port, () => {
    logger.info('%s listening at %s', server.name, server.url)
})