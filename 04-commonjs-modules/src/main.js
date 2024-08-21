// requerendo/importando o arquivo products
const p = require("./services/products");

async function main(){
    console.log("Carrinho Compras");
    p.getFullName("408", "mousepad");
    p.getFullName("508", "monitor");

}

main();