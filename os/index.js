const os = require('os');

console.clear();

/**
 * 
 * EOL: Tells the end of line character
 * Parallelism: Returns the number of logical CPUs in the system
 * Architecture:  Returns the operating system CPU architecture for which the Node.js binary was compiled
 * Constants: Returns an object containing commonly used operating system specific constants for error codes, process signals, and so on
 * Cpus: Returns an array of objects containing information about each logical CPU core
 * Dev Null: Returns the path to the null device
 * Endianness: Returns the endianness of the CPU
 * Free Memory: Returns the amount of free system memory in bytes
 * Home Directory: Returns the home directory of the current user
 * Hostname: Returns the hostname of the operating system
 * Load Average: Returns an array containing the 1, 5, and 15 minute load averages
 * Network Interfaces: Returns an object containing network interfaces that have been assigned a network address
 * Platform: Returns the operating system platform
 * Release: Returns the operating system release
 * Tmpdir: Returns the operating system's default directory for temporary files
 * Total Memory: Returns the total amount of system memory in bytes
 * Type: Returns the operating system name
 * Uptime: Returns the system uptime in seconds
 * User Info: Returns information about the currently effective user
 * Version: Returns the operating system version
 */
console.log('EOL: ', os.EOL);
console.log('Parallelism: ', os.availableParallelism());
console.log('Architecture: ', os.arch());
console.log('Constants: ', os.constants);
console.log('Cpus: ', os.cpus());
console.log('Dev Null: ', os.devNull);
console.log('Endianness: ', os.endianness());
console.log('Free Memory: ', os.freemem());
console.log('Home Directory: ', os.homedir());
console.log('Hostname: ', os.hostname());
console.log('Load Average: ', os.loadavg());
console.log('Network Interfaces: ', os.networkInterfaces());
console.log('Platform: ', os.platform());
console.log('Release: ', os.release());
console.log('Tmpdir: ', os.tmpdir());
console.log('Total Memory: ', os.totalmem());
console.log('Type: ', os.type());
console.log('Uptime: ', os.uptime());
console.log('User Info: ', os.userInfo());
console.log('Version: ', os.version());

console.log('IP Address: ', os.networkInterfaces().eth0[0].address); // Returns the IP address of the system
