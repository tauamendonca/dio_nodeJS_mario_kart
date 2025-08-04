import { characters } from '../characters.js';
import * as utils from './utils.js';

// Determina qual "bloco" de pista será o próximo 
// Aqui fiz uma mudança para nunca haver um confronto na primeira rodada
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
  

    
//TESTE PARA BLOCOS DE RETA
async function straigthLane(charactersList) {
 let totalTestSkills = [];

    totalTestSkills.push(
        charactersList[0].diceroll + charactersList[0].speed,
        charactersList[1].diceroll + charactersList[1].speed
    );


      await utils.logRollResult(
        charactersList[0].name,
        "velocidade",
        charactersList[0].diceroll,
        charactersList[0].speed
      );

      await utils.logRollResult(
        charactersList[1].name,
        "velocidade",
        charactersList[1].diceroll,
        charactersList[1].speed
      );

    console.log("   ");
    return await verifyBlockWinner (characters, totalTestSkills);
};


// TESTE PARA BLOCOS DE CURVA
async function curveLane(charactersList) {
    let totalTestSkills = [];

    totalTestSkills.push(
        charactersList[0].diceroll + charactersList[0].handling,
        charactersList[1].diceroll + charactersList[1].handling
    );

    await utils.logRollResult(
        charactersList[0].name,
        "manobrabilidade",
        charactersList[0].diceroll,
        charactersList[0].handling
    );

    await utils.logRollResult(
        charactersList[1].name,
        "manobrabilidade",
        charactersList[1].diceroll,
        charactersList[1].handling
    );

    console.log("   ");
    return await verifyBlockWinner (characters, totalTestSkills);
};



// verificando o vencedor de blocos de retas e curvas
async function verifyBlockWinner (characters, totalTestSkills) {
     if (totalTestSkills[0] > totalTestSkills[1]) {
       console.log(`${characters[0].name} marcou um ponto!`);
       characters[0].score++;
    } else if (totalTestSkills[0] > totalTestSkills[1]) {
      console.log(`${characters[1].name} marcou um ponto!`);
      characters[1].score++;
    }
    console.log("   ");
};



// TESTE PARA BLOCO DE CONFRONTO
// No caso de blocos de CONFRONTO, o desafio proposto pelo tutor da DIO é adicionar bombas e cascos, com modificações específicas na pontuação
// decidi ir um pouco mais além e adicionar a casca de banana, item do jogo Mario Kart que faz o personagem rodar e perder speed
// no entando, esse efeito será temporário, somente por um trecho de curva ou reta
async function battle(charactersList) {
      let powerResult1 = charactersList[0].diceroll + charactersList[0].power;
      let powerResult2 = charactersList[1].diceroll + charactersList[1].power;

      console.log(`${charactersList[0].name} confrontou com ${charactersList[1].name}! 🥊`);

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

      if (powerResult1 > powerResult2 && charactersList[1].score > 0) {
        console.log(
          `${charactersList[0].name} venceu o confronto! ${charactersList[1].name} perdeu 1 ponto 🐢`
        );
        characterList[1].score--;
      }

      if (powerResult2 > powerResult1 && charactersList[0].score > 0) {
        console.log(
          `${charactersList[1].name} venceu o confronto! ${charactersList[0].name} perdeu 1 ponto 🐢`
        );
        charactersList[0].score--;
      }

      console.log(
        powerResult2 === powerResult1
          ? "Confronto empatado! Nenhum ponto foi perdido"
          : ""
      );
  
      console.log("   ");
    };


    export { getRandomBlock, battle, straigthLane, curveLane };