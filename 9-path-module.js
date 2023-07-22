const path = require('path');

// gets platform specific separator symbol
console.log(path.sep);

// gives normalized file path
const filePath = path.join('/content', 'subfolder', 'test.txt');
console.log(filePath);

// gives just the end/base file you are looking for
const base = path.basename(filePath);
console.log(base);

// gets and resolves the absolute path
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(absolute);
