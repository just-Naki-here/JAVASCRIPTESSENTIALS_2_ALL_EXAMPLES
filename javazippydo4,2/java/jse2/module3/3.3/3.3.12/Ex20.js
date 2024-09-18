let re1 = /o*ps/;
console.log(re1.exec("ps")); // -> ["ps", index: 0, input: "ps", groups: undefined]
console.log(re1.exec("ops")); // -> ["ops", index: 0, input: "ops", groups: undefined]
console.log(re1.exec("He said: ooops!")); // -> ["ooops", index: 9, input: "He said: ooops!", groups: undefined]
let re2 = /o+ps/;
console.log(re2.exec("ps")); // -> null
console.log(re2.exec("ops")); // -> ["ops", index: 0, input: "ops", groups: undefined]
console.log(re2.exec("He said: ooops!")); // -> ["ooops", index: 9, input: "He said: ooops!", groups: undefined]
let re3 = /o?ps/;  /// strange, isnt it?
console.log(re3.exec("ps")); // -> ["ps", index: 0, input: "ps", groups: undefined]
console.log(re3.exec("ops")); // -> ["ops", index: 0, input: "ops", groups: undefined]
console.log(re3.exec("He said: ooops!")); // -> ["ooops", index: 9, input: "He said: ooops!", groups: undefined]
