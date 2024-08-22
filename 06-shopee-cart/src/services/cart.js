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

async function displayCart(userCart) {
  console.log("Shoppe cart list:");
  // percorrendo o carrinho do usuario ... carrinho do usuario.percorra a lista((o item percorrido, o numero da casa no vetor) => {})
  userCart.forEach((item, index) => {
    console.log(
      `${index + 1}. ${item.name} - R$ ${item.price} | ${
        item.quantity
      } | Subtotal R$ ${item.subtotal()}`
    );
  });
}

export { addItem, calculateTotal, deleteItem, removeItem, displayCart };
