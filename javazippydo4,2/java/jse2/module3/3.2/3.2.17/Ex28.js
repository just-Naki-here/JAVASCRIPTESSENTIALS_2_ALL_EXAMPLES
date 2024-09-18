let myPets = ["cat", "dog", "hamster", "canary", "shark", "cat", "dog"];
myPets.splice(2, 0, "rabbit", "guinea pig");
console.log(myPets); // -> ["cat", "dog", "rabbit", "guinea pig", "hamster", "canary", "shark", "cat", "dog"]
