function* testGenerator() {
    let data = [10, 20, 30];
    for (let element of data) {
        yield element;
    }
}
let gen = testGenerator();
console.log(gen.next()); // -> {value: 10, done: false}
console.log(gen.next()); // -> {value: 20, done: false}
console.log(gen.next()); // -> {value: 30, done: false}
console.log(gen.next()); // -> {value: undefined, done: true}