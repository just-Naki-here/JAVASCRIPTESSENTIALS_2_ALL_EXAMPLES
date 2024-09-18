let it = s[Symbol.iterator]();
console.log(it.next().value); // -> 1
console.log(it.next().value); // -> 30
console.log(it.next().value); // -> 500
console.log(it.next()); // -> {done: false, value: 50