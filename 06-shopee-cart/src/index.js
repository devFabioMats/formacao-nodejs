import createItem from "./services/item.js";

const cart = [];

console.log("Welcome to de your Shopee Cart!");

const item1 = await createItem("Hot Wheels Ferrari", 20.99, 1);
const item2 = await createItem("Hot Wheels Lamborghini", 39.99, 3);

console.log(item2.subtotal());
