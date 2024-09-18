let petsMap = new Map([["cats", 1], ["dogs", 3], ["hamsters", 2]]);
console.log(petsMap instanceof Map); // -> true
let petsArray = [...petsMap]; // -> [["cats", 1], ["dogs", 3], ["hamsters", 2]]
console.log(petsArray instanceof Array); // -> true
//For more information about the Map constructor, please visit the MDN website.
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map