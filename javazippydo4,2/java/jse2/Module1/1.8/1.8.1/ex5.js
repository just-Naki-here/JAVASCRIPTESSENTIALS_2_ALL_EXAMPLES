Object.defineProperty(contact, "_age", {
    value: contact._age,
    writable: false,
    enumerable: false,
    configurable: true
});
contact._age = 100;
console.log(contact._age);
