let bool1 = false;
let str1 = bool1.toString();
let bool2 = bool1.valueOf();
console.log(`str1 : ${typeof str1} : ${str1}`); // -> str1 : string : false
console.log(`bool2 : ${typeof bool2} : ${ bool2}`); // -> bool2 : boolean : false
