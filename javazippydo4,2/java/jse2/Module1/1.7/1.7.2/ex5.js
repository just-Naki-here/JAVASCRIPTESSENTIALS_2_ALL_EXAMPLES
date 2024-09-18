let circle = {
    radius: 100,
    center: {
        x: 0,
        y:0
    },
    getType () {
        return (typeof circle.radius === "number") ? 
        "circle" : "unknown" ;
    }
};
console.log(circle.getType());
