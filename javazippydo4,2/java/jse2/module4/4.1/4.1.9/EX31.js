let factorial = function (n) {
    return n > 1 ? factorial(n-1) * n : 1;
}
let decorator = function(fn) {
    let results = new Map();
    return function(n) {
        let result = results.get(n);
        if(!result) {
            result = fn(n);
            results.set(n, result);
            console.log(`... calc ${n} -> ${result}`);
        } else {
            console.log(`... found ${n} -> ${result}`);
            }
        return result;
    }
}
let factorial2 = decor(factorial);