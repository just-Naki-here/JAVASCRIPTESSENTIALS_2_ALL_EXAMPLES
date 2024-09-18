class AlmostEmptyClass {
    constructor(sth) {
        console.log(sth);
    };
    sayHi() {
        console.log("Hi!")
    };
    static sayHello() {
        console.log("Hello!")
    };
};
let almostEmptyObject = new AlmostEmptyClass(120); // 120
almostEmptyObject.sayHi(); // -> Hi!
almostEmptyObject.sayHello(); // error
AlmostEmptyClass.sayHello(); // -> Hello!