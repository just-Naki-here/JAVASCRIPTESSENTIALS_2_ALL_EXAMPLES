let promises = [
    new Promise ((resolve, reject) => {
        setTimeout(() => resolve(1), 1000);
    }),
    new Promise ((resolve, reject) => {
        setTimeout(() => resolve(3), 3000);
    }),
    new Promise ((resolve, reject) => {
        setTimeout(resolve(2), 2000);
    }),
    ];
    Promise.all(promises).then(resolved => resolved.forEach(p => console.log(p)));
    