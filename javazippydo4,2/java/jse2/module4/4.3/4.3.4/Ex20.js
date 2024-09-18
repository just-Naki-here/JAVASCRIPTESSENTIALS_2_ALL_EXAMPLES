let p = new Promise (function(resolve, reject) {
    setTimeout(() => resolve(5), 1000);
});
p.finally(() => console.log('promise is settled')).then(v => console.log(v)).catch( e => console.log(e));
