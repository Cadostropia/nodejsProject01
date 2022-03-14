const fs = require('fs');
const path = require('path');

const rs = fs.createReadStream(
    path.join(__dirname, 'files', 'lorem.txt'),{encoding: 'utf8'});
//making a reading stream
//fs module which allows to quickly make a writable stream for the purpose of writing data to a file
// better at very large amounts of data than fs.writeFile

const ws = fs.createWriteStream(
    path.join(__dirname, 'files', 'new-lorem.txt'),{encoding: 'utf8'});
//making a writing stream

rs.on('data', (dataChunk)=>{ws.write(dataChunk);})
//first open reading stream then taking data to transfer writing stream

rs.pipe(ws);
//shorter way to (first open reading stream then taking data to transfer writing stream)