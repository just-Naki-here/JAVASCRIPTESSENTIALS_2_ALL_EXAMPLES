let promises = [
    new Promise((resolve, reject) => {
        setTimeout(() => reject('err 3'), 3000);
    }),
    new Promise((resolve, reject) => {
        setTimeout(() => reject('err 2'), 2000);
    }),
    ];
    Promise.any(promises)
    .then(p => console.log(`any: resolved ${p}`))
    .catch(e => console.log(`any: rejected ${e}`));
    Promise.race(promises)
    .then(p => console.log(`race: resolved ${p}`))
    .catch(e => console.log(`race: rejected ${e}`));
    