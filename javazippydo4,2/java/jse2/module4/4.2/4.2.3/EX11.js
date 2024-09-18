function* testGenerator() {
    yield 10;
    yield 20;
    yield 30;
}
let gen = testGenerator();
console.log(gen.next()); // -> {value: 10, done: false}
console.log(gen.next()); // -> {value: 20, done: false}
console.log(gen.next()); // -> {value: 30, done: false}
console.log(gen.next()); // -> {value: undefined, done: true}