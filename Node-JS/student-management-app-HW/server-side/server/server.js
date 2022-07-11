const http = require('http');
const fs = require('fs');
const path = require('path');
const clientSideDirPath = path.join(__dirname + '/../../client-side');
const readStudentsFromDbFn = require('./read-students-from-db');
const dbPath = path.join(__dirname + '/../database');
let students;

const PORT = 9876;
const server = http.createServer((req, res) => {
  const url = req.url;
  console.log('url', url);
  switch (url) {
    case '/json':
      console.log(req.body, req.method); // req.body undefined, why?
    case '/students-display':
      const studentsDisplayPage = fs.readFileSync(
        clientSideDirPath + '/students-display/students-display.html'
      );
      res.end(studentsDisplayPage);
      break;
    case '/students-display.css':
      const studentsDisplayStyles = fs.readFileSync(
        clientSideDirPath + '/students-display/students-display.css'
      );
      res.end(studentsDisplayStyles);
      break;
    case '/students-display.js':
      const studentsDisplayScript = fs.readFileSync(
        clientSideDirPath + '/students-display/students-display.js'
      );
      res.end(studentsDisplayScript);
      break;
    case '/students-display-btn':
      students = readStudentsFromDbFn();
      res.end(students);
      break;
    case '/students-removal':
      const studentsRemovalPage = fs.readFileSync(
        clientSideDirPath + '/students-removal/students-removal.html'
      );
      res.end(studentsRemovalPage);
      break;
    case '/students-removal.css':
      const studentsRemovalStyles = fs.readFileSync(
        clientSideDirPath + '/students-removal/students-removal.css'
      );
      res.end(studentsRemovalStyles);
      break;
    case '/students-removal.js':
      const studentsRemovalScript = fs.readFileSync(
        clientSideDirPath + '/students-removal/students-removal.js'
      );
      res.end(studentsRemovalScript);
      break;
    case '/students-removal-btn':
      students = readStudentsFromDbFn();
      res.end(students);
      break;
    case '/page-not-found-404.css':
      const pageNotFound404Styles = fs.readFileSync(
        clientSideDirPath + 'page-not-found-404/page-not-found-404.css'
      );
      res.end(pageNotFound404Styles);
      break;
    default:
      const pageNotFound404 = fs.readFileSync(
        clientSideDirPath + '/page-not-found-404/page-not-found-404.html'
      );
      res.end(pageNotFound404);
  }
});
server.listen(PORT, () => {
  console.log(`Server is up and running. Listening on port ${PORT}`);
});
