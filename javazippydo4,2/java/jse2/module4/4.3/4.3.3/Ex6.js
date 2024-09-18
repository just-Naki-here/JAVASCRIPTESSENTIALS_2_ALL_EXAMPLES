request.open('GET', `http://localhost:3000/json?value=${value}`, false);
//server: 200 * 200 = 40000 (1482ms)
//browser: 200 * 200 = 40000
