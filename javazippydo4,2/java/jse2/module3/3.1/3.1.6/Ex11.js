let nr1 = 10.55;
console.log(nr1.toFixed(1)); // -> 10.6
console.log(nr1.toFixed(0)); // -> 11
console.log(nr1.toFixed(3)); // -> 10.550
let nr2 = 2.55;
console.log(nr2.toFixed(1)); // -> 2.5
console.log(nr2.toFixed(20)); // -> 2.54999999999999982236
console.log(((nr2 * 10).toFixed(0) / 10)); // -> 2.6