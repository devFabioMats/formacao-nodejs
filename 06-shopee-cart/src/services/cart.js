// quais ações meu carrinho pode fazer

// CASOS DE USO
// ✅ -> adicionar item no carrinho
async function addItem(userCart, item) {
  userCart.push(item);
}

// -> calcular total do carrinho
async function calculateTotal(userCart) {
  // valor anterior (total) + valor de outro item (item.subtotal()) = novo total
  return userCart.reduce((total, item) => total + item.subtotal(), 0);
}

// -> deletar item do carrinho
async function deleteItem(userCart, name) {}

// -> remover um item - diminui um item
async function removeItem(userCart, index) {}
