const express = require('express');
const app = express();
const apiRoutes = require('./api/v1/index.js');
app.use(express.json());

app.use('/', apiRoutes());

app.use('*', (req, res) => res.send('404 Not Found'));

app.listen(4000, () => console.log('Server is running on port 4000'));
