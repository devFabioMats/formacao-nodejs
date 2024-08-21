const productType = {
    version: "digital",
    tax: "x1",
}

// todas as funções que lidam com produto
async function getFullName(codeId, productName) {
    console.log("productx: " + codeId + "--" + productName);
    await doBreakLine();
}

// hidden function
async function doBreakLine(){
    console.log("\n");
}

async function getProductLabel(productName){
    console.log("Product " + productName);
}

// mostrando ao js quais funções eu quero exportar para fora
module.exports = {
    getFullName,
    getProductLabel,
    productType
}