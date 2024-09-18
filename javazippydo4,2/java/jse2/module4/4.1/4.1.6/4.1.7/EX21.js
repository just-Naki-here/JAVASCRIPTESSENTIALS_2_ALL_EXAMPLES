'use strict';
function showPoint(msg) {
    console.log(this);  // -> undefined
    console.log(`${msg} [${this.x}:${this.y}]`); // -> TypeError
}
showPoint('coordinates');