import * as cartService from "./services/cart.js";
import createItem from "./services/item.js";

const myCart = [];
const myWhishList = [];

console.log("Welcome to the your Shopee Cart!");

// criando dois itens
const item1 = await createItem("Hot Wheels Ferrari", 20.99, 1);
const item2 = await createItem("Hot Wheels Lamborghini", 39.99, 3);

// adicionei dois itens ao carrinho
await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);
await cartService.displayCart(myCart);

// deletei dois itens do carrinho
// await cartService.deleteItem(myCart, item2.name);
// await cartService.deleteItem(myCart, item1.name);

console.log("Shopee Cart TOTAL IS:");
await cartService.calculateTotal(myCart);
