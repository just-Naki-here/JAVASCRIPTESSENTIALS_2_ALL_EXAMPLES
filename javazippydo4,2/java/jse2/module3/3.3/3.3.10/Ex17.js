let re = /c.t/;
console.log(re.exec("haircut")); // -> ["cut", index: 4, input: "haircut", groups: undefined]
console.log(re.exec("ct")); // -> null
