let iterable = {
    data: [10, 30, 60, 20, 90],
    [Symbol.iterator]: function* () {
        for(element of this.data) {
            yield element;
        }
    }
}
let it = iterable[Symbol.iterator]();
console.log(it.next()); // -> {value: 10, done: false}
console.log(it.next()); // -> {value: 30, done: false}
for( a of iterable ) {
    console.log(a); // -> 10  30  60  20  90
}
console.log(...iterable); // -> 10  30  60  20  90
console.log([...iterable]); // -> [10  30  60  20  90]