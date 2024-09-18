let figure = {...circle};
delete circle.radius;
console.log(figure.radius);
console.log(figure.getType()); // "unknown"!
