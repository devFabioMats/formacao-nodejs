// requerendo/importando o arquivo products
const { getFullName } = require("./services/products");
const products = require("./services/products");

const config = require("./services/config");
const database = require("./services/database");

async function main(){
    console.log("Carrinho Compras:");

    getFullName("1", "teclado");
    console.log(productType);
    products.getFullName("1", "teclado");   
    // p.getFullName("408", "mousepad");
    // p.getFullName("508", "monitor");
    // p.getProductLabel("mousepad");

    database.connecToDatabase();
}

main();