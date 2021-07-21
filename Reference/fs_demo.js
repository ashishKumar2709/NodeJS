const fs = require("fs");
const path = require("path");

// fs.mkdir(path.join(__dirname,'/folderName'), {options}, calllbackFunction) >>>create folder
// fs.mkdir(path.join(__dirname, '/test'), {}, err => {
//     if (err) throw err;
//     console.log("folder created..");
// });

//Create and write to file: fs.writeFile(path.join(__dirname,'/folderName', 'fileName'), 'file content', callbackFunction) 
// fs.writeFile(path.join(__dirname, '/test', 'Hello.txt'), 'Hello World!', err => {
//     if (err) throw err;
//     console.log("File Created..");
// });

// fs.writeFile(path.join(__dirname, '/test', 'testfile.txt'), 'Text content from the second file', err => {
//     if (err) throw err;
//     console.log("Second file")
// });

// fs.appendFile(path.join(__dirname, '/test', 'Hello_World.txt'), '', err => {
//     if(err) throw err;
//     console.log("Appended")
// })

//AppendFile
// fs.appendFile(path.join(__dirname, '/test', 'Hello.txt'), ' How is it going there?', err => {
//     if (err) throw err;
//     console.log("File content appended")
// })

//Read from File
// fs.readFile(path.join(__dirname, '/test', 'Hello.txt'), 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// } )

//Rename a File

// fs.rename(path.join(__dirname, '/test', 'Hello.txt'), (__dirname, '/test', 'Hello_World.txt'), 
//     (err, data) => {
//         if (err) throw err;
//         console.log("File renamed"); })
// fs.readFile('Hello_World.txt', 'utf8', (err, res) => {
//     if (err) throw err
//     console.log(res)

// })
// fs.writeFile('./test/testfile.txt', 'Writing to the file', err => {
//     if(err) throw err
//     console.log('file written')
// })
// fs.readFile('./test/testfile.txt', 'utf8', (err, res) => {
//     if (err) throw err
//     console.log(res)
// })
