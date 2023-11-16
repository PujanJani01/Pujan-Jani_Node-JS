const express = require('express');
const client = require('./client');
const axios = require('axios');

const app = express();

app.get('/todos', async (req, res) => {

    let cachedData = await client.get('todos');

    if (cachedData) return res.json(JSON.parse(cachedData));

    let { data } = await axios.get('https://jsonplaceholder.typicode.com/todos');

    await client.set('todos', JSON.stringify(data));
    await client.expire('todos', 1500);

    return res.json(data);

});

app.listen(5000, () => console.log('Server running on port 5000'));

