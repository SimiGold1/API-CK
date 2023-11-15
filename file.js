// create-file.js
const fs = require('fs');

fs.writeFile('welcome.txt', 'Hello Node', (err) => {
  if (err) throw err;
  console.log('File created successfully!');
});

// read-file-js
fs.readFile('welcome.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log('File content:', data);
});
