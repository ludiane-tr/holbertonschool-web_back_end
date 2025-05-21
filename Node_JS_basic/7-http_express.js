const express = require('express');
const readDatabase = require('./utils'); // ou './readDatabase'
const path = process.argv[2];

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  try {
    const data = await readDatabase(path);

    let response = 'This is the list of our students';

    const total = Object.values(data).reduce((acc, val) => acc + val.length, 0);
    response += `\nNumber of students: ${total}`;

    for (const field in data) {
      const list = data[field];
      response += `\nNumber of students in ${field}: ${list.length}. List: ${list.join(', ')}`;
    }

    res.set('Content-Type', 'text/plain');
    res.send(response);
  } catch (err) {
    res.status(500).send('Cannot load the database');
  }
});

app.listen(port);

module.exports = app;
