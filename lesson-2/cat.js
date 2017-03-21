const fs = require('fs');

const pathToFileToRead = process.argv[2];



const readStream = fs.createReadStream(pathToFileToRead, {encoding: "utf8"});

let fileContent = '';

readStream.on('data', (chunk) => {
  fileContent += chunk;
});

readStream.on('error', (err) => {
  console.log(err);
});

readStream.on('end', () => {
  console.log('finished');
  process.stdout.write(fileContent);
});
