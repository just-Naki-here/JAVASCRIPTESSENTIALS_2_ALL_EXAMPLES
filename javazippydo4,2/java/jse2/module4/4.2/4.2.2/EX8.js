let almostIterable = {
    data: [10, 30, 60, 20, 90],
    iterator: function() {
        let index = -1;
        let data = this.data;
        return {
            next: function() {
                index++;
                return {
                    value: data.length === index ? undefined : data[index],
                    done: data.length === index
                }
            }
        }
    }
}
let it = almostIterable.iterator();
console.log(it.next()); // -> {value: 10, done: false}
console.log(it.next()); // -> {value: 30, done: false}