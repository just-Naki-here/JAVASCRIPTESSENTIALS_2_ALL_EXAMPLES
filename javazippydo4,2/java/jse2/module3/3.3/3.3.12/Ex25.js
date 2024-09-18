let re1 = /^(abc\s){3}$/;
console.log(re1.exec("abc abc abc ")); // -> ["abc abc abc ", "abc ", index: 0, input: "abc abc abc ", groups: undefined]
console.log(re1.exec("abc abc abc abc ")); // -> null
console.log(re1.exec("abc abcabc")); // -> null
