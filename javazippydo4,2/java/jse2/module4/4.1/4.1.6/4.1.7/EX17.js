let point = {
    x: 100,
    y: 200,
    testThis: function() {
        console.log(this);
    },
    show: function() {
        console.log(`${this.x}:${this.y}`);
    }
}
point.testThis(); // -> {x: 100, y: 200, test: ƒ}
point.show(); // -> 100:200