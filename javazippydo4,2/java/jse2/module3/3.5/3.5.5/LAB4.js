class Point {
    constructor(x, y) {
        this.type = 'point';
        this.x = x;
        this.y = y;
    }
}

class Line {
    constructor(points) { // [[x, y], [], [], ...]
        this.type = 'line';
        this.points = points.map(p => new Point(p[0], p[1]));
    }
}

class Figure {
    constructor(elements = []) {
        this.addElements();
    }

    addElements(elements = []) {
        this.elements = {
            points: elements.filter(e => e.type === 'point'),
            lines: elements.filter(e => e.type === 'line')
        }        
    }

    addPoint(x, y) {
            this.elements.points.push(new Point(x, y));
    }

    addLine(points=[]) { // [[x, y], [], [], ...]
        this.elements.lines.push(new Line(points));
    }

    toJSON() {
        return JSON.stringify(this.elements);
    }

    fromJSON(data="{}", add=false) {
        let obj = JSON.parse(data);
        if(add) {
            this.elements.points = this.elements.points.concat(obj.points||[]);
            this.elements.lines = this.elements.lines.concat(obj.lines||[]);
        } else {
            this.elements = obj;
        }
    }

    deleteAll() {
        this.elements.points = [];
        this.elements.lines = [];
    }
}