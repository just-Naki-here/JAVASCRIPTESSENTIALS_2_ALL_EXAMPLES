function getTick() {
    let counter = 10;
    return function () {
        return ++counter;
    }
}
let tick = getTick();
console.log(tick()); // -> 11
console.log(tick()); // -> 12
console.log(tick()); // -> 13