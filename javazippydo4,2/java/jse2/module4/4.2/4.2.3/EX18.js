function* fibonacci(range = Infinity) {
    let lastButOne = 0, last = 1;
    yield lastButOne;
    yield last;
    for(let i=1; i<=range; i++) {
        let tmp = lastButOne + last;
        lastButOne = last;
        last = tmp;
        yield last;
    }
}
let fibIt1 = fibonacci(10);
console.log([...fibIt1]);
let fibIt2 = fibonacci();
console.log(fibIt2.next().value);
console.log(fibIt2.next().value);
console.log(fibIt2.next().value);
console.log(fibIt2.next().value);
let fibIt3 = fibonacci(5);
for( let f of fibIt3) {
    console.log(f);
}