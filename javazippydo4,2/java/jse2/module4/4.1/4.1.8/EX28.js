function getMultiplyBy(multiplier) {
    return function(a) {
        return a * multiplier;
    }
}
let multiplyBy3 = getMultiplyBy(3);
console.log(multiplyBy3(2)); // -> 6
console.log(getMultiplyBy(5)(10)); // -> 50