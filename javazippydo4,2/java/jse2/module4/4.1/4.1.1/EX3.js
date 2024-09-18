function test(a, b = 1, c, d = 2) {
    console.log(`a: ${a}, b: ${b}, c: ${c}, d: ${d}`);
}
test(); // -> a: undefined, b: 1, c: undefined, d: 2
test(100); // -> a: 100, b: 1, c: undefined, d: 2
test(100, 200); // -> a: 100, b: 200, c: undefined, d: 2
test(100, 200, 300); // -> a: 100, b: 200, c: 300, d: 2
test(100, 200, 300, 400); // -> a: 100, b: 200, c: 300, d: 400