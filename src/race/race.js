import * as utils from './utils.js';
import * as blocks from './blocks.js';

// Função principal que inicia a corrida
export async function playRaceEngine(characters) {
  console.log(
    `🏁🚨 MARIO KART! Corrida entre ${characters[0].name} e ${characters[1].name} começando...\n`
  );

  for (let round = 1; round <= 5; round++) {
    console.log(`🏁 Rodada ${round}`);

    // sorteia o bloco e anuncia o que aconteceu
    let block = await blocks.getRandomBlock(round);

    // rola os dados
    let diceResults = await utils.rollDice(characters);

    for (let i = 0; i < characters.length; i++) {
      characters[i] = {
        ...characters[i],
        diceroll: diceResults[i]
      }
    }

    //teste de habilidade
    switch (block) {
      case 'RETA': 
          await blocks.straigthLane(characters) 
          break;
      case 'CURVA': 
          await blocks.curveLane(characters);
          break;
      case 'CONFRONTO': 
          await blocks.battle(characters);
          break;
      default : console.log('SEGUE ACIRRADA A CORRIDA!');
    };
  }
}

export async function declareWinner(characters) {
  console.log("    ");
  console.log("=====================================");
  console.log("🏁🏁🏁🏁 RESULTADO FINAL 🏁🏁🏁🏁");
  console.log("=====================================");
  console.log("    ");

  // characters.sort(() => {});

  for (let i = 0; i < characters.length; i++) {
    console.log(`POSIÇÃO ${i + 1}º --- ${characters[i].name} --- ${characters[i].score} ponto(s)`);   
  }

  console.log("    ");
  console.log("    ");
  
  if (characters[0].score > characters[1].score)
    console.log(`\n${characters[0].name} venceu a corrida! Parabéns! 🏆`);
  else if (characters[1].score > characters[0].score)
    console.log(`\n${characters[1].name} venceu a corrida! Parabéns! 🏆`);
  else console.log("A corrida terminou em empate");
  
  console.log("    ");
  console.log("=====================================");
}