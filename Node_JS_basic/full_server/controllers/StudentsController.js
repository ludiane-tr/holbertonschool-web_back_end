// full_server/controllers/StudentsController.js
import { readDatabase } from '../utils.js';

class StudentsController {
  static getAllStudents(req, res) {
    const filePath = process.argv[2];
    readDatabase(filePath)
      .then((data) => {
        let response = 'This is the list of our students';
        const sortedFields = Object.keys(data).sort((a, b) => a.localeCompare(b, 'en', { sensitivity: 'base' }));
        for (const field of sortedFields) {
          const students = data[field];
          response += `\nNumber of students in ${field}: ${students.length}. List: ${students.join(', ')}`;
        }
        res.status(200).send(response);
      })
      .catch((err) => {
        res.status(500).send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(req, res) {
    const filePath = process.argv[2];
    const { major } = req.params;

    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    readDatabase(filePath)
      .then((data) => {
        const students = data[major];
        res.status(200).send(`List: ${students.join(', ')}`);
      })
      .catch((err) => {
        res.status(500).send('Cannot load the database');
      });
  }
}

export default StudentsController;
