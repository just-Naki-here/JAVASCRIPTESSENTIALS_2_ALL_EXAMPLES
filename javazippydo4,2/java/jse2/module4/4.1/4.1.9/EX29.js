let funA = function(a, b) {
    return a + b;
}
let decor = function(fn) {
    return function(arg1, arg2) {
        let result = fn(arg1, arg2);
        console.log(`result ${result}`);
        return result;
    }
}
let funB = decor(funA);
console.log(funA(3, 4)); // -> 7
funB(3, 4); // -> result 7