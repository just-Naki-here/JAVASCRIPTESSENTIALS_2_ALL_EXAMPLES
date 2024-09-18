let re1 = /ca|ut/;
console.log(re1.exec("cattle")); // -> ["ca", index: 0, input: "cattle", groups: undefined]
console.log(re1.exec("haircut")); // -> ["ut", index: 5, input: "haircut", groups: undefined]
console.log(re1.exec("city")); // -> null
let re1 = /c(a|u)t/;
console.log(re1.exec("cattle")); // -> ["cat", "a", index: 0, input: "cattle", groups: undefined]
console.log(re1.exec("haircut")); // -> ["cut", "u", index: 4, input: "haircut", groups: undefined]
console.log(re1.exec("city")); // -> null
