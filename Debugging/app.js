console.clear();
console.log(`Debugger Attached`);

require('http')
    .createServer((req, res) => res.end("Hello World\n"))
    .listen(4000);