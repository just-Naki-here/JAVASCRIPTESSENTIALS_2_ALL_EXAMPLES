let Figure = function(){
    this.getType = function() {
        return this.type ? this.type : "unknown";
    }
};
let figure = new Figure;