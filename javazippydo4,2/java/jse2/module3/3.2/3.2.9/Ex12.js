let array1 = ["cat", 90, 80, 10, 20, 30, 100, 50, "dog"];
let anyNumberPresent = array1.some( (item) => {
    if(typeof item === "number") {
        return true;
    } else {
        return false;
    }
}); // -> true
