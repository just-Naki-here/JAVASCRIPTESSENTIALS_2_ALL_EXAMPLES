function* testGenerator() {
    for (let i=10; i<=30; i+=10) {
        yield i;
    }
}
let gen = testGenerator();
console.log(gen.next()); // -> {value: 10, done: false}
console.log(gen.next()); // -> {value: 20, done: false}
console.log(gen.next()); // -> {value: 30, done: false}
console.log(gen.next()); // -> {value: undefined, done: true}