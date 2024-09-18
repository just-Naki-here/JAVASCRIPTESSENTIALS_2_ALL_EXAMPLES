let re1 = /c[aiu]t/;
console.log(re1.exec("cattle")); // -> ["cat", index: 0, input: "cattle", groups: undefined]
console.log(re1.exec("haircut")); // -> ["cut", index: 4, input: "haircut", groups: undefined]
console.log(re1.exec("city")); // -> ["cit", index: 0, input: "city", groups: undefined]
let re2 = /c[^au]t/;
console.log(re2.exec("cattle")); // -> null
console.log(re2.exec("haircut")); // -> null
console.log(re2.exec("city")); // -> ["cit", index: 0, input: "city", groups: undefined]
