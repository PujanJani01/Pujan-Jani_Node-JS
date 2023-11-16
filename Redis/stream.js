const client = require('./client');

const stream = async () => {
    let result;

    // result = await client.xadd('race:france', '*', 'rider', 'Norem', 'speed', 28.8, 'position', 3, 'location_id', 1);

    // result = await client.xrange('race:france', '-', '+', 'COUNT', 2); 
    // result = await client.xrange('race:france', '1699536838967-0', '+', 'COUNT', 2);
    
    console.log(result);
};

stream();