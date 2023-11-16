const client = require('./client');

const list = async () => {
    let result;

    // result = await client.lpush('tasks', 'second task');
    // result = await client.rpush('tasks', 'third task');
    
    // result = await client.lpop('tasks');
    // result = await client.rpop('tasks');

    // result = await client.blpop('tasks', 20);
    // result = await client.brpop('tasks', 20);

    // result = await client.del('tasks');
    
    // result = await client.llen('tasks');
    result = await client.lrange('tasks', 0, -1);

    console.log(result);
}

list();