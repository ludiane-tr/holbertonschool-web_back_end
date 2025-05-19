// utils.js
const fs = require('fs');

function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(err);
        return;
      }

      const lines = data.trim().split('\n');
      const fields = {};

      for (let i = 1; i < lines.length; i++) {
        const [firstname, lastname, age, field] = lines[i].split(',');

        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(firstname);
      }

      resolve(fields);
    });
  });
}

module.exports = readDatabase;
