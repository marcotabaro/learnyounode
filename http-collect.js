const http = require('http');

let rawData = '';

http.get(process.argv[2], (res) => {
    res.setEncoding('utf8');
    res.on('data', (chunk) => {rawData += chunk});
    res.on('end', () => {
        console.log(rawData.length);
        console.log(rawData);
    })
})