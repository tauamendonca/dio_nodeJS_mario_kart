import * as utils from './utils.js';
import * as blocks from './blocks.js';

// Função principal que inicia a corrida
export async function playRaceEngine(racers) {

  console.log(
    `🏁🚨 MARIO KART! Corrida entre ${racers[0].name} e ${racers[1].name} começando...\n`
  );

  for (let round = 1; round <= 5; round++) {
    console.log("-----------------------------");
    console.log("   ");
    console.log(`🏁 Rodada ${round}`);
    console.log("   ");

    // sorteia o bloco e anuncia o que aconteceu
    let block = await blocks.getRandomBlock(round);

    console.log("   ");

    // rola os dados
    let diceResults = await utils.rollDice(racers);

    for (let i = 0; i < racers.length; i++) {
      racers[i] = {
        ...racers[i],
        diceroll: diceResults[i]
      }
    }
    
    racers = await blocks.racingLanes(racers, block);
  }

  return racers;
}



export async function declareWinner(racerList) {
  console.log("    ");
  console.log("=====================================");
  console.log("🏁🏁🏁🏁 RESULTADO FINAL 🏁🏁🏁🏁");
  console.log("=====================================");
  console.log("    ");

  racerList.sort((a, b) => b.score - a.score);

  for (let i = 0; i < racerList.length; i++) {
    console.log(`POSIÇÃO ${i + 1}º --- ${racerList[i].name} --- ${racerList[i].score} ponto(s)`);   
  }

  console.log("    ");

  if (racerList[0].score === racerList[1].score) {
    console.log("A corrida terminou em empate");
  } else {
    console.log(`\n${racerList[0].name} venceu a corrida! Parabéns! 🏆`);
  }

  console.log("    ");
  console.log("=====================================");
}