const client = require('./client');

const hash = async () => {
    let result;

    // result = await client.hset('bike:1',
    //     {
    //         model: 'Deimos',
    //         brand: 'Ergonom',
    //         type: 'Enduro bikes',
    //         price: 4972,
    //     });

    // result = await client.hget('bike:1', 'model');
    // result = await client.hgetall('bike:1');
    // result = await client.hmget('bike:1', ['model', 'brand']);

    // result = await client.hincrby('bike:1', 'price', 1000);
    
    console.log(result);
}

hash();