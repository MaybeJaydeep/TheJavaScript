
function applyCoupon(amount, couponCode) {
  switch (couponCode) {
    case "SAVE10":
      return amount - amount * 0.10;

    case "SAVE20":
      return amount - amount * 0.20;

    case "NONE":
      return amount;

    default:
      return amount; 
  }
}

console.log(applyCoupon(1000, "SAVE10"));
console.log(applyCoupon(2000, "SAVE20"));
console.log(applyCoupon(500, "NONE"));  