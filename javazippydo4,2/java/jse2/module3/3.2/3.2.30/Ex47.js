let anotherPetsMap = new Map([["snakes", 1],["cats", 3],["dogs", 2]]);
let petValuesIterator = anotherPetsMap.values();
console.log(petValuesIterator.next().value); // -> 1
console.log(petValuesIterator.next().value); // -> 3
console.log(petValuesIterator.next().value); // -> 2
