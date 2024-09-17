const readline = require('readline');

// Create an interface for reading from stdin and writing to stdout
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Ask the user for their name
console.log('Welcome to Holberton School, what is your name?');

// Wait for the user to input their name
rl.on('line', (input) => {
    console.log(`Your name is: ${input}`);
    rl.close(); // Close the readline interface
});

// When the readline interface is closed, print the closing message
rl.on('close', () => {
    console.log('This important software is now closing');
});
