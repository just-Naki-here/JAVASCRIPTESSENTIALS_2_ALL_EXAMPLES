'use strict';
let point = {
    x: 100,
    y: 200
}
function showPoint(msg) {
    console.log(`${msg} [${this.x}:${this.y}]`); // -> coordinates [100:100]
}
let showCoordinates = showPoint.bind(point, 'coordinates');
let show = showPoint.bind(point);
showCoordinates(); // -> coordinates [100:200]
showCoordinates('point'); // -> coordinates [100:200]
show('point'); // -> point [100:200]
showPoint('test'); // -> TypeError