let date1 = new Date(2020, 6, 8, 10, 20, 0);
let date2 = new Date(2020, 6, 9, 10, 20, 0);
console.log(date2.getTime() - date1.getTime()); // -> 86400000 -> 1000 x 60 x 60 x 24
