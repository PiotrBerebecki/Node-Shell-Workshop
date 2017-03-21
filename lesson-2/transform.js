const fs = require('fs');

const filePathToRead = process.argv[2];
const filePathToWrite = process.argv[3];

function toLower(buffer) {
  return buffer;
}

const readStream = fs.createReadStream(filePathToRead);
const writeStream = fs.createWriteStream(filePathToWrite);
readStream.pipe(toLower).pipe(writeStream);
