const http = require('http');
const readDatabase = require('./utils'); // ou './readDatabase'
const path = process.argv[2];

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    readDatabase(path)
      .then((fields) => {
        let response = 'This is the list of our students';

        const total = Object.values(fields).reduce((acc, list) => acc + list.length, 0);
        response += `\nNumber of students: ${total}`;

        for (const field in fields) {
          const list = fields[field];
          response += `\nNumber of students in ${field}: ${list.length}. List: ${list.join(', ')}`;
        }

        res.end(response);
      })
      .catch((err) => {
        res.statusCode = 500;
        res.end('Cannot load the database');
      });
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

app.listen(1245);

module.exports = app;
