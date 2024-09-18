let p = new Promise (function(resolve, reject) {
    setTimeout(() => resolve(5), 1000);
});
p.then(v => {console.log(v)});
p.then(v => {console.log(v)});
p.then(v => {console.log(v)});
