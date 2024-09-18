let re = /\so{2,3}ps/; // repeats 'o' two or three times 
console.log(re.exec("He said: ops!")); // -> null
console.log(re.exec("He said: ooops!")); // -> ["ooops", index: 9, input: "He said: ooops!", groups: undefined]
console.log(re.exec("He said: ooooooooops!")); // -> null
