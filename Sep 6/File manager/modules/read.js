const fs = require('fs');

exports.read = (path) => {
    let data =  fs.readFileSync(`${path}`, 'utf8'); 
   console.log('\nHere is the file content:\n',data,'\n');
}