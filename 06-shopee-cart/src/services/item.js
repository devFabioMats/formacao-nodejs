// CASOS DE USO DOS ITENS

// -> criar item com o subtotal certo
async function createItem(name, price, quantity) {
  return {
    name,
    price,
    quantity,
    subtotal: () => price * quantity * 0.2,
  };
}

export default createItem;
