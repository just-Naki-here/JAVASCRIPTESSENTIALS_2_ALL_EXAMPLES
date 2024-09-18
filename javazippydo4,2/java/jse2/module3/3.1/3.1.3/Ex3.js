let boolObj1 = new Boolean;
let boolObj2 = new Boolean(true);
let str1 = boolObj1.toString();
let bool2 = boolObj2.valueOf();
console.log(`str1 : ${typeof str1} : ${str1}`); // -> str1 : string : false
console.log(`bool2 : ${typeof bool2} : ${ bool2}`); // -> bool2 : boolean : true
