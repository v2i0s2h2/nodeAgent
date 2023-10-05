const fs = require('fs');

// Function to convert a file to a blob and save it
const fileToBlob = (inputFilePath, outputFilePath) => {
  fs.readFile(inputFilePath, (err, data) => {
    if (err) throw err;
    const hex = data.toString('hex');
    const candidBlob = 'blob "' + hex + '"';
    fs.writeFile(outputFilePath, candidBlob, (err) => {
      if (err) throw err;
      console.log('The Candid blob has been saved to ' + outputFilePath);
    });
  });
};

// Use the function
fileToBlob('simple.txt', 'simple1.txt');
