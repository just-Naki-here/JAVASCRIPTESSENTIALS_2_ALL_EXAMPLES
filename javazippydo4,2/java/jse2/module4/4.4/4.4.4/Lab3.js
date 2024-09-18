let getPromiseArray = function(args) {
    let promises = args.map(arg => new Promise(function(resolve, reject){
        if(Number.isInteger(arg) && arg > 0) {
            let rnd = Math.random();
            setTimeout(resolve(arg), arg);
        } else {
            reject(new Error(`${arg} is not a positive integer`))
        }
    }));
    return promises;
}