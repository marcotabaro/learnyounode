const http = require('http');

// let rawData = '';

// http.get(process.argv[2], (res) => {
//     res.setEncoding('utf8');
//     res.on('data', (chunk) => {rawData += chunk});
//     res.on('end', () => {
//         console.log(rawData);
//         rawData = '';
//         http.get(process.argv[3], (res) => {
//             res.setEncoding('utf8');
//             res.on('data', (chunk) => {rawData += chunk});
//             res.on('end', () => {
//                 console.log(rawData);
//                 rawData = '';
//                 http.get(process.argv[4], (res) => {
//                     res.setEncoding('utf8');
//                     res.on('data', (chunk) => {rawData += chunk});
//                     res.on('end', () => {
//                         console.log(rawData);
//                     })
//                 })
//             })
//         })
//     })
// })

async function getData(url) {
    return new Promise((resolve, reject) => {
        http.get(url, (res) => {
            let rawData = '';
            res.setEncoding('utf8');
            res.on('data', (chunk) => {rawData += chunk});
            res.on('end', () => {
                resolve(rawData);
            })
        }).on('error', (e) => {
            console.error(`Got error: ${e.message}`);
            reject(e.message);
        });
    });
}
async function main() {
    for(let i=2; i < process.argv.length; i++) {
        console.log(await getData(process.argv[i]));
    }
}

main();