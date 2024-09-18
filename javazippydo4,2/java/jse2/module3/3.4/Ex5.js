Array.prototype.getRandomItem = function() {
    return this[Math.floor(Math.random() * this.length)];
}
console.log(array.getRandomItem()); // -> ?
console.log(array.getRandomItem()); // -> ?
