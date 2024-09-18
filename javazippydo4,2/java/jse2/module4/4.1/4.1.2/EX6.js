function test(firstArg, ...anotherArgs) {
    let msg = `frist arg: ${firstArg}, length: ${anotherArgs.length}, args:`;
    anotherArgs.forEach(arg => {msg += ` ${arg}`});
    console.log(msg);
}
test(100, 200, 300); // -> frist arg: 100, length: 2, args: 200 300
test(100); // -> frist arg: 100, length: 0, args: 