var math=require('./math.js');
var fs=require('fs');

fs.readFile('./content.md', (err, file) => {
 console.log(file);
 let buff1=file;
 console.log(buff1.toString());
})

console.log(math.add(6,7));