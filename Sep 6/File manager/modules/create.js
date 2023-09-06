const fs = require('fs');

exports.createFile = (path, name, content) => {
    fs.writeFileSync(`${path}/${name}`, content);
     console.log('\nFile created!');
}

exports.createFolder = (path) => {
    fs.mkdirSync(`${path}`);
    console.log('\nFolder created!');
}