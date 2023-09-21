const express = require('express');
const app = express();
const port = 3000;

const routes = require('./routes');
const { loggerController } = require('./controllers/login.controllers');
const { authorizer } = require('./middlewares/auth');
const { registerController } = require('./controllers/register.controllers');

app.use(express.json());

app.post('/register', registerController);
app.post('/login', loggerController);
app.use('/hospital', authorizer, routes);

app.use("*", (req, res) =>{
    res.json({status: 404, message: "Not Found"})
})

app.listen(port, () => console.log(`Server listening on port ${port}`));