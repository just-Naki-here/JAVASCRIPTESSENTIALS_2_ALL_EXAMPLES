let p = new Promise (function(resolve, reject) {
    setTimeout(() => reject('err'), 1000);
});
p.finally(() => console.log('promise is settled')).then(v => console.log(v), e => console.log(e));
//promise is settled
//err