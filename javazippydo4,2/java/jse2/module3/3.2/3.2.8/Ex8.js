function toConsole(item, index, array) {
    console.log(`${index} : ${item}`);
}
array1.forEach(toConsole); // -> 0 : cat -> 1 : 90 -> 2 : 80 -> 3 : 10 -> 4 : 20 -> 5 : 30 -> 6 : 100 -> 7 : 50 -> 8 : dog
