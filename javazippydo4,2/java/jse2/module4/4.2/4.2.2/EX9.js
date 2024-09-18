for( let a of almostIterable ) { // -> TypeError: almostIterable is not iterable
console.log(a); 
}
console.log(...almostIterable);  // -> TypeError: almostIterable is not iterable
console.log([...almostIterable]);  // -> TypeError: almostIterable is not iterable