let almostIterable = {
    data: [10, 30, 60, 20, 90]
}
for( let a of almostIterable ) { // -> TypeError: almostIterable is not iterable
    console.log(a); 
}
let arr = [...almostIterable]; // -> TypeError: almostIterable is not iterable