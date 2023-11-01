//TODO --SERVER--
// const http = require('http');

// const server = http.createServer((req, res) => {
//     res.setHeader('Content-Type', 'text/json');
//     res.statusCode = 200;
//     res.end('Hello World\n');
//     // process.exit(0);
// });

// server.listen(4000, () => {
//     console.log(`Server started.`);
// });

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.statusCode = 200;
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>')
        res.write('</html>');
        return res.end();
    }

    if (url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            console.log('CHUNK ', chunk);
            body.push(chunk);
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFile('message.txt', message, err => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        });
    }

    res.setHeader('Content-Type', 'text/html');
    res.statusCode = 200;
    res.write('<html>');
    res.write('<head><title>First Web Page</title>');
    res.write('<body><h1>This is h1 Tag.</h1></body>')
    res.write('</html>')
    res.end();

});

server.listen(4000, () => {
    console.log(`Server started.`);
});
