const fs = require('fs');

const readStream = fs.createReadStream('./docs/blog3.txt', {encoding:'utf8'});
const writeStream = fs.createWriteStream('./docs/blog4.txt');

/* readStream.on('data', (burak)=> {
    console.log('-------New Metin---------')
    console.log(burak);
    writeStream.write('\nNew Metin\n');
    writeStream.write(burak);
}) */


readStream.pipe(writeStream);
