class MyIterable {
    constructor() {
        this.data = [];
    }

    get length() {
        return this.data.length;
    }

    has(n) {
        return this.data.includes(n);
    }

    add(n) {
        if(!this.has(n)) {
            this.data.push(n);
        }
    }

    del(n) {
        let index = this.data.indexOf(n);
        if(index !== -1) {
            this.data.splice(index, 1);
        }
    }

    [Symbol.iterator] = function* (){
        for(let index = 0; index<this.length; index++) {
            yield this.data[index];
        }
    }
}