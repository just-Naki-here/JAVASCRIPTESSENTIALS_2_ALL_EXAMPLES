let re = /c\.t/;
console.log(re.exec("cut")); // -> null
console.log(re.exec("c.t")); // -> ["c.t", index: 0, input: "c.t", groups: undefined]
