const read = require('./read.js');
const create = require('./create.js');

const args = process.argv.slice(2);

const method = args[0];

switch (method) {
  case 'read':
    console.log(read());
    break;
  case 'create':
    const itemObj = args[1];
    create(itemObj);
    break;
}