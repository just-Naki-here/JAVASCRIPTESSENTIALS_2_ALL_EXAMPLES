let factorial = function (n) {
    return n > 1 ? factorial(n-1) * n : 1;
}
console.log(factorial(3)); // -> 6
console.log(factorial(5)); // -> 120
console.log(factorial(10)); // -> 3628800