let Vehicle = function(id, latitude, longitude){ 
    this.id = id;
    this.latitude = latitude;     
    this.longitude = longitude;
}; 
let ids = ["AK12113", "AL1024", "BA1001"];
let vehicles = [];
ids.forEach(id => vehicles.push(new Vehicle(id, 59.358615, 17.947589)));
let vehcilesJSON = JSON.stringify(vehicles); // -> [{"id":"AK12113","latitude":59.358615,"longitude":17.947589},{"id":"AL1024","latitude":59.358615,"longitude":17.947589},{"id":"BA1001","latitude":59.358615,"longitude":17.947589}]
