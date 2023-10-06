const express = require('express');
require('dotenv').config();
const app = express();
const port = process.env.PORT;
const routes = require('./module/v1/hospital/routes/index');
const { loginController } = require('./module/v1/hospital/controllers/login.controllers');
const { verifyToken } = require('./module/v1/hospital/middlewares/auth/token');

app.use(express.json());

app.post('/login', loginController);
app.use('/hospital', verifyToken, routes);

app.use("*", (req, res) =>{
    res.status(404).json({status: 404, message: "Not Found"})
})

app.listen(port, () => console.log(`Server listening on port ${port}`));