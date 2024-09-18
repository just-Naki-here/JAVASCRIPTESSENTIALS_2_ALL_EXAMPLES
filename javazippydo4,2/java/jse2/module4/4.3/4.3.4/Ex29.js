const value = 200;
let promise = new Promise(function (resolve, reject) {
let request = new XMLHttpRequest();
request.onload = () => {
    if (request.status === 200) {
        resolve(JSON.parse(request.responseText));
        // console.log(`server: ${value} * ${value} = ${resp.square} (${resp.time}ms)`);
    } else {
        reject(new Error(request.status));
    }
};
request.open('GET', `http://localhost:3000/json?value=${value}`);
request.send();
})
promise.then(
function (result) {
    console.log(`server: ${value} * ${value} = ${result.square} (${result.time}ms)`);
},
function (error) {
    console.log(error.message);
}
);
