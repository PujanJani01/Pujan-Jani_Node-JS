const express = require('express');
const app = express();
const port = 3000;

const routes = require('./routes');

app.use(express.json());

app.use('/hospital/login', routes);

// app.use("*", (req, res) =>{
//     res.send("404 Not Found")
// })

app.listen(port, () => console.log(`Server listening on port ${port}`));