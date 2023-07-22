const { readFileSync, writeFileSync } = require('fs');
console.log('start');
// Reads the file. Two arguments 1 - file path 2 - encoding - default is utf8
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

console.log(first, second);

// Writes to the file. Two arguments and optional 3rd. 1 - file path 2 - content to write. If file don't exist node creates it and if it does exist node overwrites its content with new. Optional 3rd appends to the file.
writeFileSync(
  './content/result-sync.txt',
  `Here is the result: ${first}, ${second}`,
  { flag: 'a' }
);

console.log('done with this task');
console.log('starting the next task');
