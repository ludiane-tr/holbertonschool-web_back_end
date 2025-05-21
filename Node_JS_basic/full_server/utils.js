// full_server/utils.js
import fs from 'fs';

export function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(Error('Cannot load the database'));
      } else {
        const lines = data.trim().split('\n');
        const fields = {};
        const header = lines[0].split(',');

        const fieldIndex = header.indexOf('field');
        const firstNameIndex = header.indexOf('firstname');

        for (let i = 1; i < lines.length; i++) {
          const parts = lines[i].split(',');
          const field = parts[fieldIndex];
          const firstName = parts[firstNameIndex];

          if (!fields[field]) fields[field] = [];
          fields[field].push(firstName);
        }
        resolve(fields);
      }
    });
  });
}
