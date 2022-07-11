const fs = require('fs');
const path = require('path');
const dbPath = path.join(__dirname + '/../database');

function readStudentsFromDB() {
  // returns a JSON object as string
  return fs.readFileSync(dbPath + '/students.json', 'utf-8');
}

module.exports = readStudentsFromDB;