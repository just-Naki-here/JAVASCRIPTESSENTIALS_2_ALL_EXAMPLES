let anotherPetsObj = {"snakes": 1,"cats": 3,"dogs": 2};
for (let key in anotherPetsObj) {
    console.log(key); // -> snakes -> cats -> dogs
    console.log(anotherPetsObj[key]); // -> 1 -> 3 -> 2
}
