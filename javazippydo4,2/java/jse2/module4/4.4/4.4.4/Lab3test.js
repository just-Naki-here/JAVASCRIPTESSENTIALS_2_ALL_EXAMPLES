let promises1 = getPromiseArray([10, 30, 5, 20, 'a']);
Promise.all(promises1).then(a => console.log(`all: ${a}`))
.catch(e => console.log(`all: ${e.message}`)); // -> any: 10 
Promise.any(promises1).then(a => console.log(`any: ${a}`)).
catch(e => console.log(`any: ${e.message}`)); // -> all: a is not a positive integer