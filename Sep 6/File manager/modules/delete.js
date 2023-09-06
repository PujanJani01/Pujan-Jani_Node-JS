const fs = require('fs');

exports.delFile = (path) => {
    fs.unlinkSync(path);
    console.log("\nFile is deleted!")
}

exports.delFolder = (path) => {
    fs.rmdirSync(path);
    console.log("\nFolder is deleted!");
}