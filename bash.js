// Output a prompt
const pwd = require('./pwd.js')
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
pwd();