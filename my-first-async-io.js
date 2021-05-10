const fs = require('fs');


let file = process.argv[2];

fs.readFile(file, 'utf-8' , (err, data) => {
    if (err) {
        console.error(err)
        return
    }
    console.log(data.toString().split('\n').length-1);
});
