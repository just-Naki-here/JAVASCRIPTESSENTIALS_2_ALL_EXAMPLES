let getItem = function(array, index) {
    let retVal = undefined;
    if(index > 0 && index < array.length) {
        retVal = array[index];
    }
    return retVal;
}
let array = [10, 20, 80, 100];
console.log(getItem(array, 2)); // -> 80
