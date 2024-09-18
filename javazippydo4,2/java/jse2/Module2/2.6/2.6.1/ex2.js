let Test = function(arg) { 
    this.arg = arg;
    this.showSth = function() { 
        console.log("I'm prototyped!");
    };
    console.log(this.arg);
}; 
        
Test.showSth = function() { 
    console.log(`Hi, I'm static!`);
};
