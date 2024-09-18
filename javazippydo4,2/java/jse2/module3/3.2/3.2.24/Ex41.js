let petsIterator = petsSet.values();
let result = petsIterator.next();
while (!result.done) {
    console.log(result.value); // -> cat -> dog -> hamster
 result = petsIterator.next();
}
