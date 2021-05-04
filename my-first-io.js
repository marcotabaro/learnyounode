const fs = require('fs');

let newlines = fs.readFileSync(process.argv[2]).toString().split('\n').length-1;
console.log(newlines);