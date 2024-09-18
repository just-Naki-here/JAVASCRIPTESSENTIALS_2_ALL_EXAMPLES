let Triangle = function(v1, v2, v3) {
    this.type = "triangle";
    this.vertices = [ v1, v2, v3];
};
Triangle.prototype = figure;
let triangle1 = new Triangle({x:0, y:0}, {x:50, y:50}, {x:10, y:100});
console.log(circle1.getType());
console.log(triangle1.getType());