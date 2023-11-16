const client = require('./client');

const string = async () => {
    let result;
    // await client.set('count', 10);
    
    // await client.expire('count', 5);

    result = await client.get('count');
    
    console.log(result);  
}

string();