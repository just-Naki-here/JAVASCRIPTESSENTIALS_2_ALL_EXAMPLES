function test(...args) {
    let msg = `length: ${args.length}, args:`;
    args.forEach(arg => {msg += ` ${arg}`});
    console.log(msg);
}
test(100, 200, 300); // -> length: 3, args: 100 200 300
test(100); // -> length: 1, args: 100