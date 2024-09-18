const value = 200;
fetch(`http://localhost:3000/json?value=${value}`)
.then(response => response.json())
.then(data => {
    console.log(`server: ${value} * ${value} = ${data.square} (${data.time}ms)`);
});
console.log(`browser: ${value} * ${value} = ${value * value}`);
