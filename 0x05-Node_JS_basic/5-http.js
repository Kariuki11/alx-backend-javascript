const http = require('http');
const url = require('url');
const countStudents = require('./3-read_file_async'); // Assuming 3-read_file_async.js exists
const path = process.argv[2]; // Get the path of the CSV file from command line arguments

// Create the HTTP server
const app = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    
    if (parsedUrl.pathname === '/') {
        // Handle the root URL
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello Holberton School!');
    } else if (parsedUrl.pathname === '/students') {
        // Handle the /students URL
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.write('This is the list of our students\n');

        // Call the countStudents function
        countStudents(path)
            .then(() => {
                res.end();
            })
            .catch((error) => {
                res.write(error.message);
                res.end();
            });
    } else {
        // Handle unknown paths
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});

// Make the server listen on port 1245
app.listen(1245, () => {
    console.log('Server is listening on port 1245');
});

module.exports = app;
