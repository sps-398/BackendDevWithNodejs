const http = require('http');

const server = http.createServer(() => {
    console.log("Hi Shashank");
});

server.listen(4000);