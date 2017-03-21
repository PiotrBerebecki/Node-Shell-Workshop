const fs = require('fs');

const dataToWriteToFile = 'Simply Easy Learning 2';

const writeStream = fs.createWriteStream('output.txt', {encoding: 'utf8'});

writeStream.write(dataToWriteToFile);

writeStream.end();

writeStream.on('finish', () => {
  console.log('Write to file completes, you can open the new file');
});
