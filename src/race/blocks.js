import * as utils from './utils.js';

// Determina qual "bloco" de pista será o próximo.  
// Diferente da versão original, nunca haverá um confronto na primeira rodada
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
  

// Função base da corrida, recebe uma lista de personagens e o tipo de bloco que foi sorteado para então chamar o teste de habilidade
// em seguida adiciona os resultados em uma lista de corredores com os resultados do teste e chama a função para fazer a comparação de pontuação 
async function racingLanes(charactersList, laneType) {
  let racers = [];

  for (let i = 0; i < charactersList.length; i++) {
    let totalTestSkills = raceSkillTest(
        charactersList[i],
        laneType
      );

    racers.push({
      ...charactersList[i],       
      totalTestSkills
    })
  }

  console.log("   ");


  await verifyLead(racers);
  await raceScore(racers);

  for (let i=0; i < racers.length; i++) {
    console.log(racers[i].name + ` score: ` + racers[i].score);
  }
  
  return racers
}


// Verifica o total do teste de habilidade dos personagens, recebe o bloco para determinar qual habilidade será utilizada,
// rola os dados e em seguida faz o log do resultado, retornando o mesmo em integer
function raceSkillTest(character, block) {
  let attribute;
  
  if (block === 'CURVA') {
    attribute = character.handling;
  } else if (block === 'RETA') {
    attribute = character.speed;
  } else {
    //Bloco CONFRONTO
    attribute = character.power;
  }

  console.log(
    `${character.name} 🎲 rolou um dado de ${block} ${character.diceroll} + ${attribute} = ${
      character.diceroll + attribute
    }`
  );
  
  return (character.diceroll + attribute);
}


// Faz a verificação das colocações recebendo a lista de corredores e colocando em ordem por resultado de teste de habilidade
// Retorna a lista de corredores em ordem de posição no bloco/trecho da corrida
async function verifyLead (racers) {

  let racersPosition = racers.sort((a,b) => b.totalTestSkills - a.totalTestSkills);

  if (racersPosition[0].totalTestSkills > racersPosition[1].totalTestSkills) {
    console.log(`${racersPosition[0].name} passa liderando o trecho!`);
  } else if (racersPosition[0].totalTestSkills === racersPosition[1].totalTestSkills) {
    console.log(`${racersPosition[0].name} e ${racersPosition[1].name} passaram lado a lado! Ninguém pontua nessa rodada!`);
  } else {
    throw new Error(`Houve um erro na comparação do total de teste de habilidade (block.js linha 101)`);
  }
  
  console.log("   ");
  
  return racersPosition;
};


// Classifica os líderes de cada trecho, em ordem, dando 3 pontos para quem estiver em primeiro, 2 pontos para o segundo e 1 ponto para o terceiro 
async function raceScore(racerPositions) {
  for (let i = 0; i < 3; i++) {
      racerPositions[i].score += + 3 - i;
  }

  return racerPositions
}


//TODO: DESAFIO DIO
// TESTE PARA BLOCO DE CONFRONTO
// No caso de blocos de CONFRONTO, o desafio proposto pelo tutor da DIO é adicionar bombas, turbos e cascos, com modificações específicas na pontuação
// decidi ir um pouco mais além e adicionar a casca de banana, item do jogo Mario Kart que faz o personagem rodar e perder speed
// no entando, esse efeito será temporário, somente por um trecho de curva ou reta
async function battle(charactersList) {
      let powerResult1 = charactersList[0].diceroll + charactersList[0].power;
      let powerResult2 = charactersList[1].diceroll + charactersList[1].power;
      
      console.log(`${charactersList[0].name} entrou em confronto com ${charactersList[1].name}! 🥊`);

      console.log("   ");

      await utils.logRollResult(
        charactersList[0].name,
        "poder",
        charactersList[0].diceroll,
        charactersList[0].power
      );

      await utils.logRollResult(
        charactersList[1].name,
        "poder",
        charactersList[1].diceroll,
        charactersList[1].power
      );

      console.log("   ");

      if (powerResult1 > powerResult2 && charactersList[1].score > 0) {
        console.log(
          `${charactersList[0].name} venceu o confronto! ${charactersList[1].name} perdeu 1 ponto 🐢`
        );
        charactersList[1].score--;
      }

      if (powerResult2 > powerResult1 && charactersList[0].score > 0) {
        console.log(
          `${charactersList[1].name} venceu o confronto! ${charactersList[0].name} perdeu 1 ponto 🐢`
        );
        charactersList[0].score--;
      }


      if (powerResult1 > powerResult2 && charactersList[1].score === 0) {
        console.log(
          `${charactersList[0].name} venceu o confronto! E ${charactersList[1].name} está com zero pontos!`
        );
      }

      if (powerResult2 > powerResult1 && charactersList[0].score === 0) {
        console.log(
          `${charactersList[1].name} venceu o confronto! E ${charactersList[0].name} está com zero pontos!`
        );
      }

      console.log(
        powerResult2 === powerResult1
          ? "Confronto empatado! Nenhum ponto foi perdido"
          : ""
      );
  
      console.log("   ");
    };

    
export { getRandomBlock, battle, racingLanes };