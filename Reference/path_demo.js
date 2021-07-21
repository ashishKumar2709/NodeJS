const path = require('path');


//basename: gives base file name
console.log(path.basename(__filename));

//dirname: Directory name
console.log(path.dirname(__filename));

//extname: file extension
console.log(path.extname(__filename));

//parse: create path object
console.log(path.parse(__filename));

//concatenate paths
console.log(path.join(__dirname, 'test', 'hello.html'));