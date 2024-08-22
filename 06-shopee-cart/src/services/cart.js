// quais ações meu carrinho pode fazer

// CASOS DE USO
// -> adicionar item no carrinho
async function addItem(userCart, item) {
  userCart.push(item);
}

// -> deletar item do carrinho
async function deleteItem(userCart, name) {}

// -> remover um item - diminui um item
async function removeItem(userCart, index) {}

// -> calcular total do carrinho
async function calculateTotal(userCart) {}
