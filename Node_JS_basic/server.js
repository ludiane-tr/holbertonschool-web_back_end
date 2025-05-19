// server.js
const express = require('express');
const readDatabase = require('./utils');

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  try {
    const data = await readDatabase('database.csv');
    let response = 'This is the list of our students\n';

    for (const field in data) {
      response += `Number of students in ${field}: ${data[field].length}. List: ${data[field].join(', ')}\n`;
    }

    res.send(response.trim());
  } catch (err) {
    res.status(500).send('Cannot load the database');
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

module.exports = app;
