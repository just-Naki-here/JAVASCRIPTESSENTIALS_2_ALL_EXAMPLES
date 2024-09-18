let petsIterator = anotherPetsMap.entries();
let result = petsIterator.next();
while (!result.done) {
    console.log(result.value); // -> ["snakes", 1] -> "cats", 3] -> ["dogs", 2]
 result = petsIterator.next();
}
