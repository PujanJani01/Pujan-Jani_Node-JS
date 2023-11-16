const client = require('./client');

const sortedSet = async () => {
    let result;

    // result = await client.zadd('rank', 1, 'pujan');
    // result = await client.zadd('rank', 3, 'deepak');
    // result = await client.zadd('rank', 2, 'sachin');

    // result = await client.zrange('rank', 0, -1);
    // result = await client.zrevrange('rank', 0, -1);

    

    console.log(result);
}

sortedSet();