// EXPORTING MODULE
console.log('Exporting Module');

// Variables private(scoped to the current module)
const shippingCost = 10;
const cart = [];

// To be able to use them outside, we have to use export.
export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to the cart`);
};

// Export multiple things
const totalPrice = 237;
const totalQuantity = 23;

export { totalPrice, totalQuantity as quantity };

// DEFAULT EXPORT: When we want to export only one thing per module
export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to the cart`);
}
