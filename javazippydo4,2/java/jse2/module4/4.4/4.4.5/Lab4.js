let getWeather = function(location, info) {
    let cities;
    let url = "http://localhost:3000/weather";
    const maxWindSpeed = 15;
    const minTemp = -20; 

    let showWindInfo = function(weather){
        console.log(`WIND: ${weather.wind.speed} m/s, ${weather.wind.deg} deg`);
        if(weather.wind.speed > maxWindSpeed) {
            console.log(`WARNING! Wind speed over ${maxWindSpeed} m/s`);
        }
    };

    let showInfo = function(weather, type){
        console.log(`${type.toUpperCase()}: ${weather[type]} ${type === 'temp' ? 'C' : '%'}`);
        if(type === 'temp' && Number(weather.temp) < minTemp) {
            console.log(`WARNING! Temperature below ${minTemp} degrees`);
        }
    };

    if(!Array.isArray(location)) {
        cities = [location]
    } else {
        cities = location;
    }
    let infoQuery = '&info=';
    let promises = cities.map(city => fetch(`${url}?city=${city}${info && info !== 'all'?infoQuery + info:''}`));
    Promise.all(promises)
        .then(responses => Promise.all(responses.map(response => response.json())))
        .then(data => {
            for(let city of data) {
                console.log('');
                console.log(`CITY: ${city.city}`);
                for(let key in city.weather) {
                    if(key === 'wind') {
                        showWindInfo(city.weather);
                    } else {
                        showInfo(city.weather, key);
                    }
                }
            }
        })
        .catch(e => console.log(e.message));
}