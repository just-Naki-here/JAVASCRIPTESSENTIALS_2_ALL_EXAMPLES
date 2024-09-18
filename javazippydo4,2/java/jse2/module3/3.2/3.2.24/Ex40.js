let petsSet = new Set(["cat", "dog", "hamster"]); // -> {"cat", "dog", "hamster"}
let petsIterator = petsSet.values();
console.log(petsIterator.next().value); // -> cat
console.log(petsIterator.next().value); // -> dog
console.log(petsIterator.next().value); // -> hamster
