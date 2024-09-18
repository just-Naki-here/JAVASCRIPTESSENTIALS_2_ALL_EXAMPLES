class Vehicle {
    constructor({id, latitude, longitude}){
        this.id = id;
        this.status = "unavailable";
        this.setPosition({latitude, longitude});
    };
    setPosition({latitude, longitude}) {
        this.time = Date.now();
        this.longitude = longitude;
        this.latitude = latitude;
    };
    getPosition() {
        return {
            latitude: this.latitude,
            longitude: this.longitude
        };
    };
    static isSameId(v1, v2) {
        return v1.id === v2.id;
    };
};
let vehicle1 = new Vehicle({longitude: 18.213423, latitude: 59.367628, id: "AL1024"});
let vehicle1 = new Vehicle({longitude: 0, latitude: 0, id: "AL1024"});
let vehicle1 = new Vehicle({longitude: 18.213423, latitude: 59.367628, id: "AL1026"});
Vehicle.isSameId(vehicle1, vehicle2); // -> true
Vehicle.isSameId(vehicle1, vehicle2); // -> false
