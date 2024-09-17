const fs = require('fs');

function countStudents(fileName) {
  const studentsByField = {};
  const studentCountByField = {};
  let totalStudents = 0;

  try {
    const fileData = fs.readFileSync(fileName, 'utf-8');
    const lines = fileData.split('\n');

    lines.forEach((line, index) => {
      if (line.trim()) {
        totalStudents += 1;
        const studentData = line.split(',');

        const field = studentData[3];
        const studentName = studentData[0];

        // Populate students by field
        if (studentsByField[field]) {
          studentsByField[field].push(studentName);
        } else {
          studentsByField[field] = [studentName];
        }

        // Track number of students in each field
        studentCountByField[field] = (studentCountByField[field] || 0) + 1;
      }
    });

    console.log(`Number of students: ${totalStudents - 1}`); // Exclude header row

    for (const [field, count] of Object.entries(studentCountByField)) {
      if (field !== 'field') {
        console.log(`Number of students in ${field}: ${count}. List: ${studentsByField[field].join(', ')}`);
      }
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
