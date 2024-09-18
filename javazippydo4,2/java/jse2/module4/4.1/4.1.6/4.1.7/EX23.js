'use strict';
let point = {
    x: 100,
    y: 200
}
function showPoint(msg) {
    console.log(this);  // -> {x: 100, y: 200}
    console.log(`${msg} [${this.x}:${this.y}]`); // -> coordinates [100:100]
}
showPoint.apply(point, ['coordinates']);