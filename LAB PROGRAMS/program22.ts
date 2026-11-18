let balance = 500;
function login() {
    console.log("Login Successful");
}
function addMoney(amount: number) {
    balance += amount;  
    console.log("Balance:", balance);
}
function buyTicket() {
    if (balance >= 100) {
        balance -= 100;
        console.log("Toll Ticket Purchased");
    }
}
function generateQR() {
    console.log("QR Code Generated");
}
function verifyToll() {
    console.log("Toll Verified");
login();
addMoney(200);
buyTicket();
generateQR();
verifyToll();