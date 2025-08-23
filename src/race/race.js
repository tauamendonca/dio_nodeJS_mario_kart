import { rollDices, wait, viewRacePositions } from '../utils.js';
import { battle } from './battle.js';
import { racingLanes } from './lanes.js';


// Função principal que inicia a corrida
export async function playRaceEngine(racers, raceLength) {

  console.log(`

  ======================================================================================

                            🚦🚦🚦 MARIO KART! 🚦🚦🚦

                           A corrida está para começar!
    
                                 Participantes: 
  `);

  for (let i = 0; i < racers.length; i++) {
    console.log(`                                  ${racers[i].icon}  ${racers[i].name}`)
  }

  console.log(` 
        
  ======================================================================================
  
  `);
  
  await wait(1000)

  for (let round = 1; round <= raceLength; round++) {
    // sorteia o bloco e anuncia o que aconteceu
    let block = await getRandomBlock(round);
    
    
    if (block !== "CONFRONTO") console.log(`🏁 Rodada ${round}`);
    if (block === "CONFRONTO") console.log(`⚔️ CONFRONTO`);
    
    console.log("   ");

  if (block === "CURVA") {
    let random = Math.random();
    random > 0.50 ? console.log(`UMA CURVA PARA A ESQUERDA!`) : console.log(`UMA CURVA PARA A DIREITA!`); 
  } else if (block === "RETA") {
    console.log(`OS CORREDORES ENTRAM EM UMA RETA!`);
  } else if (block === "CONFRONTO") {
    console.log(`É HORA DO CONFRONTO!`);
  } else {
    throw (e) => console.log(`HOUVE UM ERRO NA SELEÇÃO DE BLOCOS: ${e}`)
  }
       
       
  

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
      round -= 1;
      
      // Caso queira acompanhar passo a passo, utilizar o código comentado abaixo
      // await viewRacePositions(racers);
      
    } else {
      racers = await racingLanes(racers, block);

      // await viewRacePositions(racers);
    };

    

    console.log("----------------------------------------------------------");
    console.log("   ");

    await wait(1000)
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
      if (random > 0.50) {
            result = "CURVA";
      } else {
        result = "RETA";    
      }
  }
  
  if (round > 1) {
    switch (true) {
        case random > 0.66:
            result = "RETA";
            break;
        case random < 0.33:
            result = "CURVA";
            break;
        default:
            result = "CONFRONTO";
      }  
  }
  
    return result;
 };
  

export async function declareWinner(racerList) {
  await wait(500)

  console.log("    ");
  console.log("=====================================");
  console.log("🏁🏁🏁🏁 RESULTADO FINAL 🏁🏁🏁🏁");
  console.log("=====================================");
  console.log("    ");

  viewRacePositions(racerList);

  console.log("    ");

  if (racerList[0].score === racerList[1].score) {
    console.log("A corrida terminou em empate");
  } else {
    console.log(`\n${racerList[0].name} venceu a corrida! Parabéns! 🏆`);
  }

  console.log("    ");
  console.log("=====================================");

  // Foi necessário incluir pois devido a ter incluído uma interface o readline (utils, linha 54) estava impedindo o processo de fechar sozinho por aguardar entradas
  // Testado com o package why-is-node-running para determinar a causa 
  process.exit();
}


