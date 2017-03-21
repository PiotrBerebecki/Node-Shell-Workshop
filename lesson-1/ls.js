#!/usr/bin/env node

const fs = require('fs');

// const flag = process.argv[2];
const extension = process.argv[3];


fs.readdir(process.cwd(), (err, directory) => {
  if (err) {
    console.log(err);
  }

  const filteredElements = directory.filter(element => {
    // return element.includes(extension);
    return element.indexOf(extension) !== -1;
  });

  process.stdout.write(filteredElements.join(' '));
});
