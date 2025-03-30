// task 1 
// created customer class 
class Customer {
    constructor(name, email) {
        this.name = name; // customer name 
        this.email = email; // customer email 
        this.purchaseHistory = []; // customer purchase amounts array 
    }
    // adds purchase amount to purchaseHistory array 
    addPurchase(amount) {
        this.purchaseHistory.push(amount);
    }
    // calculate and returns the total amount spent 
    getTotalSpent() {
        return this.purchaseHistory.reduce((total, amount) => total + amount, 0);
    }
}
// created a new customer 
let customer1 = new Customer('Beth Andy', 'beth.andy@gmail.com');
// add purchases to purchase history 
customer1.addPurchase(67);
customer1.addPurchase(164);
// log total amount spent by customers
console.log(`Total spent by ${customer1.name}: $${customer1.getTotalSpent()}`);