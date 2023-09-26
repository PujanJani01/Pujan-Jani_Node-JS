const express = require('express');
require('dotenv').config();
const app = express();
const port = process.env.PORT;

const routes = require('./routes');
// const { registerController } = require('./controllers/register.controllers');
const { loginController } = require('./controllers/login.controllers');
const { verifyToken } = require('./middlewares/auth/token');

// const { authorizer } = require('./middlewares/auth');

app.use(express.json());

// app.post('/register', registerController);
app.post('/login', loginController);
app.use('/hospital', verifyToken, routes);

app.use("*", (req, res) =>{
    res.json({status: 404, message: "Not Found"})
})

app.listen(port, () => console.log(`Server listening on port ${port}`));