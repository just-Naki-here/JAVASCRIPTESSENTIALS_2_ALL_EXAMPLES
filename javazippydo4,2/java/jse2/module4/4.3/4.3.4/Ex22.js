let p = new Promise((resolve, reject) => {
    resolve(5);
});
p.finally(() => {
    console.log('end')
})
.then(v => {
    console.log(v);
    return ++v;
})
.then(v => {
    console.log(v);
    return ++v;
})
.then(v => {
    console.log(v);
});
