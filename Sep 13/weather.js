
const arg = process.argv;

async function getData(cityName){
    const res = await fetch(`http://api.weatherapi.com/v1/current.json?key=0ab1ea38d771445395a92836231309&q=${cityName}&aqi=yes`)
    return await res.json();
}

async function showData(city = 'london'){
    const data = await getData(city);
    console.log(data);
}

showData(arg[2]);