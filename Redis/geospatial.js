const client = require('./client');

const geospatial = async () => {
    let result;

    // result = await client.geoAdd('locations', { 
    //     longitude: -122.27652,
    //     latitude: 37.805186,
    //     member: 'San Francisco'
    //   });

    // result = await client.geosearch('locations', {
    //     longitude: -122.27652,
    //     latitude: 37.805186,
    // },
    // { radius: 5, unit: 'km'}
    // );

console.log(result);
};

geospatial();