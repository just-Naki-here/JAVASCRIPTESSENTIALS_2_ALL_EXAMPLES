let text = "One, two, three, one, two, three.";
console.log(text.substr(0,8)); // -> One, two
console.log(text.substr(10)); // -> three, one, two, three.
console.log(text.substr(-6)); // -> three.
console.log(text.substr(-6, 2)); // -> th
