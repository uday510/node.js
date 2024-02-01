const http = require('http');
const port = 3000;
const hostname = '127.0.0.1';

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
//    res.write('First Line');
//    res.end('<p>Hello World</p>');
//    console.log('process exit.');
//    process.exit();
    
    res.write('<html>');
    res.write('<head>');
    res.write('<title>Home Page</title>');
    res.write('<style>');
    res.write('body {');
    res.write('  font-family: Arial, sans-serif;');
    res.write('  background-color: #f0f0f0;');
    res.write('  text-align: center;');
    res.write('}');
    res.write('p {');
    res.write('  color: #333;');
    res.write('  font-size: 24px;');
    res.write('}');
    res.write('</style>');
    res.write('</head>');
    res.write('<body>');
    res.write('<p><--Hello World--></p>');
    res.write('</body>');
    res.write('</html>');
    res.end();
    
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
