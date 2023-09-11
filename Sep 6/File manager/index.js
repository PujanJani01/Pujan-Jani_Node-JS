const readline = require('readline');
const { createFile, createFolder } = require('./modules/create.js');
const { read } = require('./modules/read.js');
const { delFile, delFolder } = require('./modules/delete.js');
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function fileOperations() {
    rl.question("Choose what to do: \n1. Create\n2. Read and display\n3. Delete\n4. Exit\n\nChoice: ", (choice) => {
        switch (choice.trim()) {
            case "1":
                rl.question("File or folder? ", (type) => {
                    if (type.toLowerCase() == "file") {
                        rl.question("Path: ", (path) => {
                            rl.question("Name: ", function (name) {
                                rl.question("Content: ", function (content) {
                                    createFile(path, name, content);
                                    fileOperations();
                                })
                            });
                        });
                    } else if (type.toLowerCase() == "folder") {
                        rl.question("Path: ", (path) => {
                            createFolder(path);
                            fileOperations();
                        });
                    }
                    else {
                        console.log('Invalid input!');
                        fileOperations();
                    }
                });
                break;
            case "2":
                rl.question("Give the path of file you want to read: ", (path) => {
                    read(path);
                    fileOperations();
                });
                break;
            case "3":
                rl.question("What do you want to delete file or folder? ", (type) => {
                    if (type.toLowerCase() == "file") {
                        rl.question("Path: ", (path) => {
                            delFile(path);
                            fileOperations();
                        });
                    } else if (type.toLowerCase() == "folder") {
                        rl.question("Path: ", (path) => {
                            delFolder(path);
                            fileOperations();
                        });
                    }
                    else {
                        console.log('Invalid input!');
                        fileOperations();
                    }
                });
                break;
            case "4":
                console.log("Bye...");
                rl.close();
                break;
            default:
                console.log('Invalid input!\n');
                fileOperations();
        }
    });
}
fileOperations();