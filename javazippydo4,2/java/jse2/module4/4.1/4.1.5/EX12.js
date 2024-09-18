function getPoint() {
    function inc(n) {
        return ++n;
    };
    return {
        x: 10,
        y: 20,
        incX: function() {
            this.x = inc(this.x);
        },
        incY: function() {
            this.x = inc(this.x);
        }
    };
}
let point = getPoint();
console.log(point); // -> {x: 10, y: 20, show: ƒ, incX: ƒ, incY: ƒ}
point.incX();
console.log(point); // -> {x: 11, y: 20, show: ƒ, incX: ƒ, incY: ƒ}