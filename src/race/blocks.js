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
    let totalTestSkills = utils.raceSkillTest(
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
  
  return racers
}


// Faz a verificação das colocações recebendo a lista de corredores e colocando em ordem por resultado de teste de habilidade
// Retorna a lista de corredores em ordem de posição no bloco/trecho da corrida
async function verifyLead (racers) {

  let racersPosition = racers.sort((a,b) => b.totalTestSkills - a.totalTestSkills);

  if (racersPosition[0].totalTestSkills > racersPosition[1].totalTestSkills) {
    console.log(`${racersPosition[0].name} passa liderando o trecho, ganhando 3 pontos!`);
    console.log(`Seguido de perto por ${racersPosition[1].name} que passa em segundo, ganhando 2 pontos!`);
    console.log(`E logo atrás, o terceiro colocado ${racersPosition[2].name} passa, e ganha 1 ponto!`);
  } else if (racersPosition[0].totalTestSkills === racersPosition[1].totalTestSkills) {
    console.log(`Os corredores passaram lado a lado! Ninguém pontua nessa rodada!`);
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
   
export { getRandomBlock, racingLanes };