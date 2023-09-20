const express = require('express');
const app = express();
const port = 3000;

const routes = require('./routes');
const { logger } = require('./middlewares/logger');
const { authenicator } = require('./middlewares/authenticator');

app.use(express.json());

app.post('/hospital/login', logger);
app.use('/hospital', authenicator, routes);

app.use("/*", (req, res) =>{
    res.send("404 Not Found")
})

app.listen(port, () => console.log(`Server listening on port ${port}`));