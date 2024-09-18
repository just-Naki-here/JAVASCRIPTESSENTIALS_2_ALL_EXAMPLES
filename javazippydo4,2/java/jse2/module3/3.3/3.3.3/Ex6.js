let vehcilesJSON = '[{"id":"AK12113","latitude":59.358615,"longitude":17.947589},{"id":"AL1024","latitude":59.358615,"longitude":17.947589},{"id":"BA1001","latitude":59.358615,"longitude":17.947589}]';
vehcilesJSON = vehcilesJSON.replaceAll("id", "plate");
let vehicles = JSON.parse(vehcilesJSON);
console.log(vehicles instanceof Array); // -> true
console.log(vehicles.length); // -> 3
console.log(vehicles[0].plate); // -> AK12113
