const fs = require('fs');

function readDatabase(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.split('\n').filter((line) => line.trim() !== '');
      lines.shift(); // En-tête

      const result = {};
      for (const line of lines) {
        const [firstname, , , field] = line.split(',');
        if (field) {
          if (!result[field]) result[field] = [];
          result[field].push(firstname);
        }
      }

      resolve(result);
    });
  });
}

module.exports = readDatabase;
