const fs = require('fs');
const readable = fs.createReadStream('source.txt');
const writable = fs.createWriteStream('destination.txt')

readable.pipe(writable);
writable.on('finish',()=>{
    console.log('done')
})