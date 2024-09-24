const v8 = require('node:v8');
const stream = v8.getHeapSnapshot();

stream.pipe(process.stdout);