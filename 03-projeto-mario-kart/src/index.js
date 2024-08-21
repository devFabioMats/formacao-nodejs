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
async function getRandomBlock() {
    let random = Math.random(); //sorteia valor aleatorio entre 0 e 1
    let result;

    switch (true) {
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
    console.log(`${characterName} 🎲 rolou um dado de ${block} ${diceResult} + ${attribute} = ${diceResult + attribute}`);
}

async function playRaceEngine(character1, character2) {
    // let -> declarar variável
    for (let round = 1; round <= 5; round++) {
        console.log(`🏁 Rodada ${round} 🏁`);

        //comentar tudo ctrl + k + c
        //chama a funcao de sortear bloco
        let block = await getRandomBlock();
        console.log(`Bloco: ${block} \n`);

        //chama a funcao de rolar os dados
        let diceResult1 = await rollDice();
        let diceResult2 = await rollDice();

        //teste de habilidade
        let totalTestSkill1 = 0;
        let totalTestSkil21 = 0;

        //=== se o valor e o tipo sao iguais
        if (block === "RETA") {
            totalTestSkill1 = diceResult1 + character1.VELOCIDADE;
            totalTestSkill2 = diceResult2 + character2.VELOCIDADE;

            //chamadno o resultado do log
            await logRollresult(character1.NOME, "velocidade", diceResult1, character1.VELOCIDADE);
            await logRollresult(character2.NOME, "velocidade", diceResult2, character2.VELOCIDADE);
        }

        if (block === "CURVA") {
            totalTestSkill1 = diceResult1 + character1.MANOBRABILIDADE;
            totalTestSkill2 = diceResult2 + character2.MANOBRABILIDADE;

            await logRollresult(character1.NOME, "manobrabilidade", diceResult1, character1.MANOBRABILIDADE);
            await logRollresult(character2.NOME, "manobrabilidade", diceResult2, character2.MANOBRABILIDADE);
        }

        //verificando o vencedor
        if (totalTestSkill1 > totalTestSkill2) {
            console.log(`\n${character1.NOME} marcou 1 ponto!`);
            character1.PONTOS++;
        } else if (totalTestSkill2 > totalTestSkill1) {
            console.log(`\n${character2.NOME} marcou 1 ponto!`);
            character2.PONTOS++;
        } else if (totalTestSkill1 == totalTestSkill2) {
            console.log(`\nEmpate! Ninguém marcou pontos!`);
        }

        if (block === "CONFRONTO") {
            let powerResult1 = diceResult1 + character1.PODER;
            let powerResult2 = diceResult2 + character2.PODER;

            console.log(`${character1.NOME} confrontou com ${character2.NOME}! 🥊\n`);

            await logRollresult(character1.NOME, "poder", diceResult1, character1.PODER);
            await logRollresult(character2.NOME, "poder", diceResult2, character2.PODER);

            //OTIMIZANDO IF's
            //se o poder do personagem 1 for maior que o poder do personagem 2 e o personagem 1 tiver pontos, então o personagem 2 perde 1 ponto
            if (powerResult1 > powerResult2 && character2.PONTOS > 0) {
                console.log(`\n${character1.NOME} venceu o confronto! ${character2.NOME} perdeu 1 ponto! 🐢`);
                character2.PONTOS--;
            }

            if (powerResult2 > powerResult1 && character1.PONTOS > 0) {
                console.log(`\n${character2.NOME} venceu o confronto! ${character1.NOME} perdeu 1 ponto! 🐢`);
                character1.PONTOS--;
            }
            //se o poder do personagem 1 for igual ao poder do personagem 2, então ninguém perde pontos
            console.log(powerResult2 == powerResult1 ? "\nConfronto empatado! Nenhum ponto foi perdido!" : "");
        }

        console.log("-------------------------------------");
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