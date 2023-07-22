// Modules
// CommonJS, every file is a module (by default)
// Modules -- Encapsulate Code (only share minimum)

const names = require('./4-firstModuleNames');
const sayHi = require('./5-utils');
const data = require('./6-alternative-syntax');

require('./7-mind-grenade');

console.log(data);
sayHi('eric');
sayHi(names.john);
sayHi(names.peter);
