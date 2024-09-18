function* cities() {
        for(city of ['London', 'Oslo', 'Berlin']) {
            yield city;
        }
}
function* test() {
    yield* cities();
    yield 'Amsterdam'
    yield* ['Madrid', 'Rome'];
}
console.log([...test()]); // -> ['London', 'Oslo', 'Berlin', 'Amsterdam', 'Madrid', 'Rome']