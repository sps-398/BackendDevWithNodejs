const http = require('http');
const routes = require('./routes');

const server = http.createServer(routes.routeHandler);

server.listen(3000);