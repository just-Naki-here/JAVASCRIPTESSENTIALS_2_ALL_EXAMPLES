let myPets = ["cat", "dog"];
let [pet1 = "fish", , pet3 = "fish"] = myPets;
console.log(pet1); // -> cat
console.log(pet3); // -> fish
