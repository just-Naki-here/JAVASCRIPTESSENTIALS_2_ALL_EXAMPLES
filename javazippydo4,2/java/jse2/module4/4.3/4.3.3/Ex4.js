const value = 200;
let request = new XMLHttpRequest();
let responseLoaded = () => {
    if (request.status === 200) {
        const resp = JSON.parse(request.responseText);
        console.log(`server: ${value} * ${value} = ${resp.square} (${resp.time}ms)`);
    }
}
request.onload = responseLoaded;
request.open('GET', `http://localhost:3000/json?value=${value}`);
request.send();
console.log(`browser: ${value} * ${value} = ${value * value}`);
//scheme://host:port/path?query
//http://localhost:3000/json?value=200
//browser: 200 * 200 = 40000
//server: 200 * 200 = 40000 (1577ms)