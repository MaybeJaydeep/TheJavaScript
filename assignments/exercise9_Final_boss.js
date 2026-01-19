const inventory = [
  { name: "Laptop", price: 1000, stock: 5 },
  { name: "Phone", price: 500, stock: 0 },
  { name: "Mouse", price: 50, stock: 10 }
];

const totalInventoryValue = inventory
  .filter(item => item.stock > 0)
  .map(item => item.price * item.stock)
  .reduce((sum, value) => sum + value, 0);

console.log(totalInventoryValue);