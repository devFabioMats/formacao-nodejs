// quais ações meu carrinho pode fazer

// CASOS DE USO
// ✅ -> adicionar item no carrinho
async function addItem(userCart, item) {
  userCart.push(item);
}

// ✅ -> calcular o total do carrinho
async function calculateTotal(userCart) {
  //console.log("\nShopee Cart TOTAL IS:");

  const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
  console.log(`🎁Total: ${result}`);
}

// -> deletar item do carrinho
async function deleteItem(userCart, name) {
  // chame de index = carrinho do usuario.encontre((item) => item.nome === nome do item))
  const index = userCart.findIndex((item) => item.name === name);

  // quando ele não encontra, a funcao retorna -1
  if (index !== -1) {
    // userCart.cortafora(aquilo que ele encontrou, quantos elementos o usuario quer cortar)
    userCart.splice(index, 1);
  }
}

// -> remover um item - diminui um item
async function removeItem(userCart, index) {}

export { addItem, calculateTotal, deleteItem };
