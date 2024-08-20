const player1 = {
    NOME: "Mario",
    VELOCIDADE: 4,
    MANOBRABILIDADE: 3,
    PODER: 3,
    PONTOS: 0,
};

const player2 = {
    NOME: "Luigi",
    VELOCIDADE: 3,
    MANOBRABILIDADE: 4,
    PODER: 3,
    PONTOS: 0,
};

//funcao para rolar dados
//async = funcao que nao é executada imediatamente
async function rollDice() {
    //floor = arredonda para baixo e random = gera um número aleatório 
    return Math.floor(Math.random() * 6) + 1; 
};

/* 
// chama a função main para mostrar no terminal
async function main() {
    console.log("hello");
};
main();
//-----------------------------------------------------
// funcao auto-invocável, sem precisar "chamá-la"
(async function main() {
    console.log("hello");
})();
*/

async function playRaceEngine(character1, character2) {}

(async function main() {
    // win + . para abrir emojis
    // interpolacao de strings `` e ${}
    console.log(`🏁🚨 Corrida entre ${player1.NOME} e ${player2.NOME} começando... \n`);

    //funcao que chama funcao
    //await -> espera a funcao terminar para continuar
    await playRaceEngine(player1, player2);
})();