let anotherPetsMap = new Map([["snakes", 1],["cats", 3],["dogs", 2]]);
let petKeysIterator = anotherPetsMap.keys();
console.log(petKeysIterator.next().value); // -> snakes
console.log(petKeysIterator.next().value); // -> cats
console.log(petKeysIterator.next().value); // -> dogs
