class TestClass { 
    constructor(arg) {
        this.arg = arg;
        console.log(this.arg);
    }; 
    
    showSth() { 
        console.log("I'm prototyped!");
    };
    
    static showSth() { 
        console.log(`Hi, I'm static!`);
    };  
}; 
let test = new TestClass("Hello");
test.showSth(); // -> I'm prototyped!
TestClass.showSth(); // -> I'm static!
console.log(test instanceof TestClass);
