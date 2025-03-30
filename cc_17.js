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

// task 2 
// created a sales rep class
class SalesRep {
    constructor(name) {
        this.name = name; // sales rep name 
        this.clients = []; // array of clients 
    }
    // add customer to clients array 
    addClient(customer) {
        this.clients.push(customer);
    }
    // find client by name and return total amount spent 
    getClientTotal(name) {
        const client = this.clients.find(client => client.name === name);
        return client ? client.getTotalSpent() : 0; // return total amount spent otherwise return 0 
    }
}
