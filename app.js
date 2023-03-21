const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My App</title></head>');
    res.write('<body>');

  if (url === '/')
    response(res, "Welcome to my NodeJs project");
  if (url === '/home')
    response(res, "Welcome home");
  if(url === '/about')
    response(res, "Welcome to About Us page");
  if(url === '/node')
    response(res, "Welcome to my NodeJs project");

  res.write('</body>');
  res.write('</html>');
  res.end();
});

function response(res, str) {
    res.write(str);
}

server.listen(4000);