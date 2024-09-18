let Circle = function(center, radius){
    this.type = "circle";
    this.center = center;
    this.radius = radius;
};
Circle.prototype = figure;
let circle1 = new Circle({x:0, y:0}, 10);
let circle2 = new Circle({x:100, y:100}, 100);
