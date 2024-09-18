class Bus extends Vehicle {
    constructor({seats}) {
        this.seats = seats;
    }
}
let bus = new PassengerVehicle({seats: 40}); 
console.log(bus.seats); // -> 40
console.log(bus.id); // -> ! undefined