// todas as funções que lidam com produto
async function getFullName(codeId, productName) {
    return codeId + "--" + productName;
}

// mostrando ao js quais funções eu quero exportar para fora
module.exports = {
    getFullName,
}