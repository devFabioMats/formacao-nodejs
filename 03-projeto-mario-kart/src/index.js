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

const player3 = {
    NOME: "Yoshi",
    VELOCIDADE: 2,
    MANOBRABILIDADE: 4,
    PODER: 3,
    PONTOS: 0,
};

const player4 = {
    NOME: "Peach",
    VELOCIDADE: 3,
    MANOBRABILIDADE: 4,
    PODER: 2,
    PONTOS: 0,
};

const player5 = {
    NOME: "Bowser",
    VELOCIDADE: 5,
    MANOBRABILIDADE: 2,
    PODER: 5,
    PONTOS: 0,
};

const player6 = {
    NOME: "Donkey Kong",
    VELOCIDADE: 2,
    MANOBRABILIDADE: 2,
    PODER: 5,
    PONTOS: 0,
};

async function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
};

async function getRandomBlock() {
    let random = Math.random();
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
    }

    return result;
}

async function getRandomCharacter() {
    let random = Math.random();
    let result;

    switch (true) {
        case random < 0.16:
            result = player1;
            break;
        case random < 0.33:
            result = player2;
            break;
        case random < 0.50:
            result = player3;
            break;
        case random < 0.66:
            result = player4;
            break;
        case random < 0.83:
            result = player5;
            break;
        default:
            result = player6;
    }

    return result;
}

async function getRandomAttack(){
    let random = Math.random();
    let result;

    switch (true) {
        case result < 0.5:
            result = "CASCO";
            break;
        default:
            result = "BOMBA";
            break;
    }

    return result;
}

async function logRollresult(characterName, block, diceResult, attribute) {
    console.log(`${characterName} 🎲 rolou um dado de ${block} ${diceResult} + ${attribute} = ${diceResult + attribute}`);
}

async function playRaceEngine(character1, character2) {
    for (let round = 1; round <= 5; round++) {
        console.log(`🏁 Rodada ${round} 🏁`);

        //sortear bloco
        let block = await getRandomBlock();
        console.log(`Bloco: ${block} \n`);

        //rolar os dados
        let diceResult1 = await rollDice();
        let diceResult2 = await rollDice();

        //teste de habilidade
        let totalTestSkill1 = 0;
        let totalTestSkill2 = 0;

        if (block === "RETA") {
            totalTestSkill1 = diceResult1 + character1.VELOCIDADE;
            totalTestSkill2 = diceResult2 + character2.VELOCIDADE;

            await logRollresult(character1.NOME, "velocidade", diceResult1, character1.VELOCIDADE);
            await logRollresult(character2.NOME, "velocidade", diceResult2, character2.VELOCIDADE);
        }

        if (block === "CURVA") {
            totalTestSkill1 = diceResult1 + character1.MANOBRABILIDADE;
            totalTestSkill2 = diceResult2 + character2.MANOBRABILIDADE;

            await logRollresult(character1.NOME, "manobrabilidade", diceResult1, character1.MANOBRABILIDADE);
            await logRollresult(character2.NOME, "manobrabilidade", diceResult2, character2.MANOBRABILIDADE);
        }

        if (block === "CONFRONTO") {
            let powerResult1 = diceResult1 + character1.PODER;
            let powerResult2 = diceResult2 + character2.PODER;

            console.log(`${character1.NOME} confrontou com ${character2.NOME}! 🥊\n`);

            await logRollresult(character1.NOME, "poder", diceResult1, character1.PODER);
            await logRollresult(character2.NOME, "poder", diceResult2, character2.PODER);

            let attack = await getRandomAttack();

            if (powerResult1 > powerResult2 && character2.PONTOS > 0) {
                if (attack === "CASCO") {
                    console.log(`\n${character1.NOME} lançou um casco em ${character2.NOME}! 🐢`);
                } else if (attack === "BOMBA") {
                    console.log(`\n${character1.NOME} lançou uma bomba em ${character2.NOME}! 💣`);
                }
                
                console.log(`\n${character1.NOME} venceu o confronto e ganhou um turbo de 1 ponto! ${character2.NOME} levou um(a) ${attack} e perdeu 1 ponto! 🐢💣`);
                character2.PONTOS--;
                character1.PONTOS++;
            }

            if (powerResult2 > powerResult1 && character1.PONTOS > 0) {
                if (attack === "CASCO") {  
                    console.log(`\n${character2.NOME} lançou um casco em ${character1.NOME}! 🐢`)
                } else if (attack === "BOMBA") {
                    console.log(`\n${character2.NOME} lançou uma bomba em ${character1.NOME}! 💣`)
                }   

                console.log(`\n${character2.NOME} venceu o confronto e ganhou um turbo de 1 ponto! ${character1.NOME} levou um(a) ${attack} e perdeu 1 ponto! 🐢💣`);
                character1.PONTOS--;
                character2.PONTOS++;
            }

            //se o poder do personagem 1 for igual ao poder do personagem 2, então ninguém perde pontos
            console.log(powerResult2 == powerResult1 ? "\nConfronto empatado! Nenhum ponto foi perdido!" : "");
        }

        //verificando o vencedor
        if (totalTestSkill1 > totalTestSkill2) {
            console.log(`\n${character1.NOME} marcou 1 ponto!`);
            character1.PONTOS++;
        } else if (totalTestSkill2 > totalTestSkill1) {
            console.log(`\n${character2.NOME} marcou 1 ponto!`);
            character2.PONTOS++;
        }

        console.log("-------------------------------------");
    }
}

async function declareWinner(character1, character2) {
    console.log("Resultado final:");
    console.log(`${character1.NOME}: ${character1.PONTOS} ponto(s)`);
    console.log(`${character2.NOME}: ${character2.PONTOS} ponto(s)`);

    if (character1.PONTOS > character2.PONTOS) {
        console.log(`\n🏆 ${character1.NOME} é o grande vencedor! Parabéns! 🏆`);
    } else if (character2.PONTOS > character1.PONTOS) {
        console.log(`\n🏆 ${character2.NOME} é o grande vencedor! Parabéns! 🏆`);
    } else {
        console.log("\n🏁 A corrida terminou empatada! 🏁");
    }
}

(async function main() {
    let randomcharacter1 = await getRandomCharacter();
    let randomcharacter2 = await getRandomCharacter();

    console.log(`\n🏁🚨 Corrida entre ${randomcharacter1.NOME} e ${randomcharacter2.NOME} começando... \n`);

    await playRaceEngine(randomcharacter1, randomcharacter2);

    await declareWinner(randomcharacter1, randomcharacter2);
})();
