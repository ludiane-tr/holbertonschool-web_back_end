const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      try {
        const lines = data.trim().split('\n');
        const students = lines.slice(1).filter(line => line.trim() !== '');

        console.log(`Number of students: ${students.length}`);

        const fields = {};

        for (const student of students) {
          const parts = student.split(',');
          const firstname = parts[0];
          const field = parts[3];

          if (!fields[field]) {
            fields[field] = [];
          }
          fields[field].push(firstname);
        }

        for (const field in fields) {
          const names = fields[field];
          console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
        }

        resolve(); // on termine sans retourner de valeur
      } catch (parseError) {
        reject(new Error('Cannot load the database'));
      }
    });
  });
}

module.exports = countStudents;
