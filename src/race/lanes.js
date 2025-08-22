// Lanes é o controle das retas e curvas
import { raceSkillTest } from '../utils.js';

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
  
  return racers
}


// Faz a verificação das colocações recebendo a lista de corredores e colocando em ordem por resultado de teste de habilidade
// Retorna a lista de corredores em ordem de posição no bloco/trecho da corrida
async function verifyLead (racers) {

  let racersPosition = racers.sort((a,b) => b.totalTestSkills - a.totalTestSkills);

  if (racersPosition[0].totalTestSkills > racersPosition[1].totalTestSkills) {
        console.log(`${racersPosition[0].name} passa liderando o trecho, ganhando 3 pontos!`);
        console.log(`Seguido de perto por ${racersPosition[1].name} que passa em segundo, ganhando 2 pontos!`);
        if (racers.length > 2) {
            console.log(`E logo atrás, o terceiro colocado ${racersPosition[2].name} passa, e ganha 1 ponto!`);
        }
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
  if (racerPositions.length > 2) {
    for (let i = 0; i < 3; i++) {
        racerPositions[i].score += + 3 - i;
    }
  } else {
    racerPositions[0].score += 3;
    racerPositions[1].score += 2;
  }

  return racerPositions
}
   
export { racingLanes };