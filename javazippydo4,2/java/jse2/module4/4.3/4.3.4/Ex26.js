let promises = [
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(4), 4000);
    }),
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(3), 3000);
    }),
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(2), 2000);
    }),
    ];
    Promise.any(promises)
    .then(p => console.log(`any: first resolved ${p}`));
    Promise.race(promises)
    .then(p => console.log(`race: first resolved ${p}`));
    