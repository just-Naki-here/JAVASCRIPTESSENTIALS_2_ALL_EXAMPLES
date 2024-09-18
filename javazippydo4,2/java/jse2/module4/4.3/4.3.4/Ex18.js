let p = new Promise (function(resolve, reject) {
    setTimeout(() => reject('err'), 1000);
});
p.finally(() => console.log('promise is settled')).catch( e => console.log(e));