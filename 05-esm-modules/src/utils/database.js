async function connectToDatabase(dataName) {
  // logica de conexao
  console.log(`conectado ao banco ${dataName}`);
}

async function disconnectFromDatabase(dataName) {
  // logica de desconexao
  console.log(`desconectado do banco ${dataName}`);
}

export { connectToDatabase, disconnectFromDatabase };
