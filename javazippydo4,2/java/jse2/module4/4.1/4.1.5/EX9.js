let counter = 0; // global variable
function tick() {
    return ++counter;
}
console.log(tick()); // -> 1
console.log(tick()); // -> 2
console.log(tick()); // -> 3