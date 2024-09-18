let promises = [
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(1), 1000);
    }),
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(3), 3000);
    }),
    new Promise((resolve, reject) => {
        setTimeout(() => reject('err 2'), 2000);
    }),
    ];
    Promise.all(promises)
    .then(a => a.forEach(p => console.log(p)))
    .catch(e => console.log(e));
    