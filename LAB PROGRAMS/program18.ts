
interface Product {
    id: number;
    name: string;
    price: number;
    quantity: number;
}

var products: Product[] = [
    { id: 1, name: "Seeds", price: 100, quantity: 2 },
    { id: 2, name: "Fertilizer", price: 200, quantity: 1 },
    { id: 3, name: "Farming Tools", price: 300, quantity: 1 }
];

var total: number = 0;

console.log("AgriMart Products");

for (var p of products) {
    console.log(p.name + " - Rs." + p.price);
    total += p.price * p.quantity;
}

console.log("Total Amount: Rs." + total);
console.log("Order Placed Successfully");
console.log("Order Status: Pending");