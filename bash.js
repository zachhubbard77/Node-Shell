// Output a prompt
const pwd = require('./pwd.js')
const ls = require('./ls.js')

const fs = require('fs');

process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
pwd();
ls();