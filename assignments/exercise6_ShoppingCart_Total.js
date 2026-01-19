const cart = [100, 200, 50];

const total = cart.reduce((sum, price) => sum + price, 0);

console.log(total);