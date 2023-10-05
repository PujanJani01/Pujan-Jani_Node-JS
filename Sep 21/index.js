const mysql = require('mysql2/promise');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'MyNewPass',
    database: 'pj'
})

// connection.query('SELECT * FROM employee', (err, results) => {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(results);
//     }
// })

connection.query('SELECT * FROM employee');
