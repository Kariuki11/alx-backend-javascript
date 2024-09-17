const fs = require('fs').promises;

function countStudents(path) {
    return fs.readFile(path, 'utf8')
        .then((data) => {
            const lines = data.trim().split('\n').filter(line => line.length > 0);

            if (lines.length === 0) {
                throw new Error('Cannot load the database');
            }

            // Remove the first line (header of the CSV)
            const headers = lines.shift();

            const studentsByField = {};
            let totalStudents = 0;

            // Loop through each line (student data) and group by field
            lines.forEach((line) => {
                const [firstname, lastname, age, field] = line.split(',');

                if (field && firstname) {
                    // Increment total number of students
                    totalStudents++;

                    // If field doesn't exist in the object, initialize it
                    if (!studentsByField[field]) {
                        studentsByField[field] = [];
                    }

                    // Add student's first name to the list of students in that field
                    studentsByField[field].push(firstname);
                }
            });

            // Log the total number of students
            console.log(`Number of students: ${totalStudents}`);

            // Log the number of students and list of names for each field
            for (const [field, students] of Object.entries(studentsByField)) {
                console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
            }
        })
        .catch((error) => {
            // Handle file reading errors
            throw new Error('Cannot load the database');
        });
}

module.exports = countStudents;
