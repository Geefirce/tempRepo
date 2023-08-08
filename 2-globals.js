//dirname 
console.log(__dirname);

// Example of using __dirname and __filename
console.log(__dirname); // Output: '/path/to/current/directory'
console.log(__filename); // Output: '/path/to/current/file.js'

//set intervals 
setInterval(() => {
     console.log('hello world');
    
}, 1000);


// Example of using the global object
global.myGlobalVariable = 'Hello, I am a global variable';
console.log(global.myGlobalVariable); // Output: Hello, I am a global variable


// Example of using the process object
console.log(process.env.NODE_ENV); // Output: 'development' (if NODE_ENV is set as 'development' in the environment)
console.log(process.argv); // Output: an array of command-line arguments passed to the process


// Example of using the console object
console.log('This is a log message');
console.error('This is an error message');



// Example of using the require function
const fs = require('fs'); // Importing the 'fs' module for working with the file system


// Example of using module and exports to define and export a function
module.exports = {
    greet: function() {
      console.log('Hello from the exported function!');
    }
  };
  // In another file, you can import and use the exported function
  const myModule = require('./myModule');
  myModule.greet(); // Output: 'Hello from the exported function!'
  