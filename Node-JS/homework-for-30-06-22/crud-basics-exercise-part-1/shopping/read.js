const fs = require('fs');

function readFile() {
  return fs.readFileSync('./shoppingCart.json', {encoding: 'utf-8'});
}

module.exports = readFile;