let almostIterable = {
    data: [10, 30, 60, 20, 90],
    iterator: function() {
        return {
            next: function() {
                return {
                    value: undefined,
                    done: false
                }
            }
        }
    }
}
it = almostIterable.iterator(); // -> {next: ƒ}
it.next(); // -> {value: undefined, done: false}