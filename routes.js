const fs = require('fs');

const eventHandler = (req, res) => {
    const url = req.url;
    const method = req.method;
    var msg="";
    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Enter Message</title><head>');
        return fs.readFile('message.txt', (err, value) => {
            if (err) return;
            var msg=value.toString();
            res.write(`<body><p>${msg}</p><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>`);
            res.write('</html>');
            return res.end();
    });
    }
    if (url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
        console.log(chunk);
        body.push(chunk);
        });
        return req.on('end', () => {
        const parsedBody = Buffer.concat(body).toString();
        const message = parsedBody.split('=')[1];
        fs.writeFile('message.txt', message, err=> {
            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();
        });
        });
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title><head>');
    res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
    res.write('</html>');
    res.end();
}

exports = eventHandler;