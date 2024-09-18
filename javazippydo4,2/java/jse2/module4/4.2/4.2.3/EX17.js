class Factorial {
    constructor(range = Infinity) {
        this.range = range;
    }
    [Symbol.iterator] = function* (){
        let last = 1;
        for(let index = 1; index <= this.range; index++){
            last *= index;
            yield last;
        }        
    }
}
let factorial = new Factorial(5);
console.log([...factorial]); // -> [1, 2, 6, 24, 120]
let it = factorial[Symbol.iterator]();
console.log(it.next().value); // -> 1
console.log(it.next().value); // -> 2
console.log(it.next().value); // -> 6