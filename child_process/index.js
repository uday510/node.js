
const { spawn } = require('child_process');
const ls = spawn('ls', ['-lh', '/tmp']);

ls.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
});

ls.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
});

ls.stdout.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
});