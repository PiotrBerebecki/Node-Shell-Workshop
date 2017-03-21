const fs = require('fs');

const filePathToRead = process.argv[2];
const command = process.argv[3];
const filePathToWrite = process.argv[4];

const readStream = fs.createReadStream(filePathToRead);
const writeStream = fs.createWriteStream(filePathToWrite, {flags: 'a'});
readStream.pipe(writeStream);
