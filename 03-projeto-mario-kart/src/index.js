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

//funcao para sortear qual blocos
async function getRandomBlock(){
    let random = Math.random(); //sorteia valor aleatorio entre 0 e 1
    let result;

    switch(true) {
        case random < 0.33:
            result = "RETA"
            break;
        case random < 0.66:
            result = "CURVA"
            break;
        default:
            result = "CONFRONTO"
            break;
    }

    return result;
}

//funcao para automatizar mensagem de log
async function logRollresult(characterName, block, diceResult, attribute) {
    console.log(`${characterName} 🎲 rolou um dado de ${block} ${diceResult}`);
}

async function playRaceEngine(character1, character2) {
    // let -> declarar variável
    for(let round = 1; round <= 5; round++) {
        console.log(`🏁 Rodada ${round} 🏁`);

        //comentar tudo ctrl + k + c
        //chama a funcao de sortear bloco
        let block = await getRandomBlock();
        console.log(`Bloco: ${block} \n`);

        //chama a funcao de rolar os dados
        let diceResult1 = await rollDice();
        let diceResult2 = await rollDice();

        //teste de habilidade
        let totalTesteSkill1= 0;
        let totalTesteSkil21= 0;

        //=== se o valor e o tipo sao iguais
        if(block === "RETA"){
            totalTesteSkill1 = diceResult1 + character1.VELOCIDADE;
            totalTesteSkill2 = diceResult2 + character2.VELOCIDADE;

            //chamadno o resultado do log
            await logRollresult(character1.NOME, "velocidade", diceResult1, character1.VELOCIDADE);
            await logRollresult(character2.NOME, "velocidade", diceResult2, character2.VELOCIDADE);
        }
        if(block === "CURVA"){
            totalTesteSkill1 = diceResult1 + character1.MANOBRABILIDADE;
            totalTesteSkill2 = diceResult2 + character2.MANOBRABILIDADE;

            await logRollresult(character1.NOME, "manobrabilidade", diceResult1, character1.MANOBRABILIDADE);
            await logRollresult(character2.NOME, "manobrabilidade", diceResult2, character2.MANOBRABILIDADE);
        }
        if(block === "CONFRONTO"){
            let powerResult1 = diceResult1 + character1.PODER;
            let powerResult2 = diceResult2 + character2.PODER;

            await logRollresult(character1.NOME, "poder", diceResult1, character1.PODER);
            await logRollresult(character2.NOME, "poder", diceResult2, character2.PODER);
        }
    }
}

(async function main() {
    // win + . para abrir emojis
    // interpolacao de strings `` e ${}
    console.log(`🏁🚨 Corrida entre ${player1.NOME} e ${player2.NOME} começando... \n`);

    //funcao que chama funcao
    //await -> espera a funcao terminar para continuar
    await playRaceEngine(player1, player2);
})();

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