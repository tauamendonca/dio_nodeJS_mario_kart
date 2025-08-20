import * as utils from './utils.js';

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


    export { battle }