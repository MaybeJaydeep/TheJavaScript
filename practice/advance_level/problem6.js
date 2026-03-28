/*

Problem 6: Inventory Management System
Objective
Create an inventory system for managing products.
Product Structure
{ id, name, price, quantity }

Requirements
Functions to:


Add a product


Update quantity by product ID


Remove out-of-stock products


Calculate total inventory value


Avoid unnecessary object mutation


Expected Outcome
Inventory updates correctly


Accurate total value calculation


Clean, immutable updates


*/

const Inventory = {
  products: [],

  // Add product
  addProduct(product) {
    this.products = [...this.products, { ...product }];
  },

  // Update quantity by ID
  updateQuantity(id, qtyChange) {
    this.products = this.products.map(p =>
      p.id === id
        ? { ...p, quantity: p.quantity + qtyChange }
        : p
    );
  },

  // Remove out-of-stock products
  removeOutOfStock() {
    this.products = this.products.filter(p => p.quantity > 0);
  },

  // Calculate total inventory value
  totalValue() {
    return this.products.reduce(
      (sum, p) => sum + p.price * p.quantity,
      0
    );
  }
};


Inventory.addProduct({ id: 1, name: "Laptop", price: 50000, quantity: 2 });
Inventory.addProduct({ id: 2, name: "Phone", price: 20000, quantity: 3 });

Inventory.updateQuantity(1, -2); // laptop quantity becomes 0
Inventory.removeOutOfStock();

console.log("Products:", Inventory.products);
console.log("Total Value:", Inventory.totalValue());
