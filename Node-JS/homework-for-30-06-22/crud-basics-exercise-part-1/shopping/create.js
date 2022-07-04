const fs = require('fs');
const listItems = [];

function createListItem(itemObj) {
  listItems.push(itemObj);
  fs.writeFileSync('./shoppingCart.json', JSON.stringify(listItems), {
    encoding: 'utf-8',
  });
}

module.exports = createListItem;
