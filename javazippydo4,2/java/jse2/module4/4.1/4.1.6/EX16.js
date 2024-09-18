(function () {
    let a = 10;
    let b = 20;
    let result;
    let sum = function (x, y) {
        return x + y;
    }
    result = sum(a, b);
    console.log(result); // -> 30
})();
console.log(result); // -> Undefined ReferenceError: result is not defined