// requerendo/importando o arquivo products
const product = require("./services/products");
const config = require("./services/config");

async function main(){
    console.log("Carrinho Compras");

    // p.getFullName("408", "mousepad");
    // p.getFullName("508", "monitor");
    // p.getProductLabel("mousepad");

    
    console.log(config.client);

}

main();