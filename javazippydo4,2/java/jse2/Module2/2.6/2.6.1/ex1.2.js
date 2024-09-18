let Test = function(arg) { 
    this.arg = arg;
    console.log(this.arg);
}; 
    
Test.prototype.showSth = function() { 
    console.log("I'm prototyped!");
};
    
Test.showSth = function() { 
    console.log(`Hi, I'm static!`);
};  
let test = new Test("Hello");
test.showSth(); // -> I'm prototyped!
Test.showSth(); // -> I'm static!
console.log(test instanceof Test);
