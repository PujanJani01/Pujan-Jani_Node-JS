const fs = require('fs');

fs.exists('./static/data', (exists) => {
    if (exists == false) {
        fs.mkdir('./static/data', { recursive: true }, (err) => {
            // wFile();
               fs.writeFile("./static/data/user.txt", "Hello user!", (err) => {
                if (err) { console.log(err); return; }
                fs.appendFile("./static/data/user.txt", "\nHow aare you?", (err) => {
                    if (err) console.log(err); return;
                });
            });
        });
    }
    else {
        // wFile();
        fs.writeFile("./static/data/user.txt", "Hello user!", (err) => {
            if (err) { console.log(err); return; }
            fs.appendFile("./static/data/user.txt", "\nHow aare you?", (err) => {
                if (err) console.log(err); return;
            });
        });
    }
});

// function wFile() {
//     fs.writeFile("./static/data/user.txt", "Hello user!", (err) => {
//         if (err) { console.log(err); return; }
//         fs.appendFile("./static/data/user.txt", "\nHow aare you?", (err) => {
//             if (err) console.log(err); return;
//         });
//     });
// }