function executeOperation(operation, firstArg, secondArg) {
    return operation(firstArg, secondArg);
}
console.log(executeOperation(sum, 10, 20)); // -> 30