
interface Vehicle {
    id: number;
    name: string;
    type: string;
    price: number;
}

var vehicles: Vehicle[] = [
    { id: 1, name: "Swift", type: "Car", price: 1500 },
    { id: 2, name: "SUV", type: "SUV", price: 2500 },
    { id: 3, name: "Truck", type: "Truck", price: 3000 }
];

console.log("Available Vehicles");

for (var v of vehicles) {
    console.log(v.id + ". " + v.name);
    console.log("Type: " + v.type);
    console.log("Price per day: Rs." + v.price);
}

var selected: number = 1;
var days: number = 2;

var vehicle = vehicles[selected - 1];

var total = vehicle.price * days;

console.log("Vehicle: " + vehicle.name);
console.log("Rental Days: " + days);
console.log("Total Amount: Rs." + total);
console.log("Booking Status: Confirmed");