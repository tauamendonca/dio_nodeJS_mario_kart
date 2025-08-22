import { rollDices } from '../utils.js';
import { battle } from './battle.js';
import { racingLanes } from './lanes.js';


// Função principal que inicia a corrida
export async function playRaceEngine(racers, raceLength) {

  console.log(
    `🏁🚨 MARIO KART! 
      A corrida está para começar!
      Participantes: 
      ${racers[0].name}`
  );

  for (let round = 1; round <= raceLength; round++) {
    console.log("-----------------------------");
    console.log("   ");
    console.log(`🏁 Rodada ${round}`);
    console.log("   ");

    // sorteia o bloco e anuncia o que aconteceu
    let block = await getRandomBlock(round);

    console.log("   ");

    // rola os dados
    let diceResults = await rollDices(racers);

    for (let i = 0; i < racers.length; i++) {
      racers[i] = {
        ...racers[i],
        diceroll: diceResults[i]
      }
    }
    
    if (block === 'CONFRONTO') {
      racers = await battle(racers);
    } else {
      racers = await racingLanes(racers, block);  
    }
  }

  return racers;
}

// Determina qual "bloco" de pista será o próximo.  
// Diferente da versão original, nunca haverá um confronto na primeira rodada
// A lógica de batalha e das retas e curvas foi separada das que estão aqui para melhor controlar as responsabilidades
async function getRandomBlock(round) {
  let random = Math.random();
  let result;
  
  if (round === 1) {
      switch (true) {
        case random > 0.66:
            console.log(`UMA CURVA PARA A DIREITA!`);
            result = "CURVA";
            break;
        case random < 0.33:
            console.log(`UMA CURVA PARA A ESQUERDA!`);
            result = "CURVA";
            break;
        default:
            console.log(`OS CORREDORES ENTRAM EM UMA RETA!`);
            result = "RETA";    
      } 
  }
  
  if (round > 1) {
    switch (true) {
        case random > 0.66:
            console.log(`OS CORREDORES ENTRAM EM UMA RETA!`);
            result = "RETA";
            break;
        case random < 0.33:
            if (random < 0.16) {  
                console.log(`UMA CURVA PARA A ESQUERDA!`);
            } else {
                console.log(`UMA CURVA PARA A DIREITA!`);
            }
            result = "CURVA";
            break;
        default:
            console.log(`É HORA DO CONFRONTO!`);
            result = "CONFRONTO";
      }  
  }
  
    return result;
 };
  

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

  await setTimeout(() => console.log(''), 2000);
}


