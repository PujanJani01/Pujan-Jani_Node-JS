const client = require('./client');

// if success, returns 1, otherwise 0

const set = async () => {
    let result;

    // result = await client.sadd('ip', 1);

    // result = await client.srem('ip', 3);

    // result = await client.smembers('ip');
    // result = await client.sismember('ip', 3);

    // result = await client.scard('ip');

    console.log(result);
}

set();