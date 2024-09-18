let myPets = ["cat", "dog", "hamster", "canary", "shark", "cat", "dog"];
let removedPets = myPets.splice(2, 3); 
console.log(myPets); // -> ["cat", "dog", "cat", "dog"]
console.log(removedPets); // -> ["hamster", "canary", "shark"]
