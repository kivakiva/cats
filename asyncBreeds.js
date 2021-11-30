// asyncBreeds.js
const fs = require('fs');

const asyncFunc = (breed) =>  { 
console.log('Return Value: ', breed);
};

const breedDetailsFromFile = function(breed, callback) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    console.log("In readFile's Callback: it has the data.");
    if (!error) return callback(data);
  });
};

// we try to get the return value
const bombay = breedDetailsFromFile('Bombay', asyncFunc);
