#!/usr/bin/env node

const fs = require('fs');

const pathToFileToRead = process.argv[2];

fs.readFile(pathToFileToRead, 'utf8', (err, fileContent) => {
  if (err) {
    console.log(err);
  }
  process.stdout.write(fileContent);
});
