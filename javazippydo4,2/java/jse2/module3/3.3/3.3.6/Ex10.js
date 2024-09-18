let randomInteger = (min, max) => {
    let _min = Math.ceil(min);
    let _max = Math.floor(max);
    return Math.floor(Math.random() * (_max - _min) + _min);
}
console.log(randomInteger(10,20)); // -> ?
