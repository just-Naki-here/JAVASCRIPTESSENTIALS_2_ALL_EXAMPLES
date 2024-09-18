class Vehicle {
    constructor({id, latitude, longitude}){
       this.setPosition = function({latitude, longitude}) {
           this.time = Date.now();
           this.longitude = longitude;
           this.latitude = latitude;
       };
       this.getPosition = function() {
           return {
               latitude: this.latitude,
               longitude: this.longitude
           };
       };
       this.id = id;
           this.status = "unavailable";
       this.setPosition({latitude, longitude});
       };
   };
   let vehicle1 = new Vehicle({id: "AL1024", latitude: 59.367647, longitude: 18.213451});
   let vehicle2 = new Vehicle({longitude: 18.213423, latitude: 59.367628, id: "AL1024"});
   