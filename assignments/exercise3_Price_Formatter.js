const prices = [10, 20, 30];

const formattedPrices = prices.map(price => `$${price}`);

console.log(formattedPrices);

/*
const prices = [1000, 2000000, 30000];

const formatter = new Intl.NumberFormat("en-US");

const formattedPrices = prices.map(price => formatter.format(price));

console.log(formattedPrices);
*/