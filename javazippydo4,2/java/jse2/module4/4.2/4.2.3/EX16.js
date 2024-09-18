let factorialGenerator = function* (range = Infinity) {
    let last = 1;
    for (let index = 1;index <= range; index++){
        last *= index;
        yield last;
    }
}
let factorial = factorialGenerator(3);
console.log(factorial.next()); // -> {value: 1, done: false}
console.log(factorial.next()); // -> {value: 2, done: false}
console.log(factorial.next()); // -> {value: 6, done: false}
console.log(factorial.next()); // -> {value: undefined, done: true}