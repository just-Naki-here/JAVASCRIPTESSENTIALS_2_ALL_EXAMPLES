date3 = new Date("2020-02-02T20:20:00.000");
date4 = new Date("2020-02-02T20:20:00.000Z");
console.log(date3.toLocaleString()); // -> 02/02/2020, 20:20:00
console.log(date3.toISOString()); // -> 2020-02-02T19:20:00.000Z
console.log(date3.toUTCString()); // -> Sun, 02 Feb 2020 19:20:00 GMT
console.log(date4.toLocaleString()); // -> 02/02/2020, 21:20:00
console.log(date4.toISOString()); // -> 2020-02-02T20:20:00.000Z
console.log(date4.toUTCString()); // -> Sun, 02 Feb 2020 20:20:00 GMT
console.log(date3.getTime()); // -> 1580671200000
console.log(date4.getTime()); // -> 1580674800000
console.log(date4.getTime() - date3.getTime()); // -> 3600000
