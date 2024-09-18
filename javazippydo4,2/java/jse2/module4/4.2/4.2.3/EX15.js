let it1 = iterable[Symbol.iterator]();
console.log([...it1]); // -> [10  30  60  20  90]
console.log([...it1]); // -> []
let it2 = iterable[Symbol.iterator]();
console.log([...it2]); // -> [10  30  60  20  90]