let decorator = function(fn) {
    let results = new Map();
    return function(n) {
        console.time(n);
        let result = results.get(n);
        if(!result) {
            result = fn(n);
            results.set(n, result);
        }
        console.timeEnd(n);
        return result;
    }
}