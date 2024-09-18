let myDecorator = function(fn) {
    let cache = new Set();
    let included = function(...args) {
        let found = false;
        for(let e of cache) {
            let index = 0;
            console.log(`${e}`)
            found = true;
            for(let arg of args) {
                console.log(`   ${arg}`);
                if(arg !== e[index++]) {
                    found = false;
                    break;
                }
            }
            if(found) {
                break;
            }
        }
        return found;
    }
    return function(...args) {
        if(included(...args)) {
            console.log(`arguments already used: ${args}`);
        } else {
            cache.add(args);
        }
        fn(...args);

    }
}