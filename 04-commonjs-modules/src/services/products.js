// todas as funções que lidam com produto
async function getFullName(codeId, productName) {
    console.log("\n");
    console.log("productx: " + codeId + "--" + productName);
}

async function getProductLabel(productName){
    console.log("Product " + productName);
}

// mostrando ao js quais funções eu quero exportar para fora
module.exports = {
    getFullName,
    getProductLabel,
}