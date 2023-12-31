const express = require('express');
require('dotenv').config();
const apiroutes = require('./api/v1');
const login = require('./module/v1/auth/controllers/login.controllers');
const register = require('./module/v1/auth/controllers/register.controllers');
const { verifyToken } = require('./middlewares/token');
const app = express();
const port = process.env.PORT;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.use('/', apiroutes());

app.use('*', (req, res) => {
    res.status(404).send('404 Not Found');
});

app.listen(port, () => console.log(`Server is running on port ${port}`));