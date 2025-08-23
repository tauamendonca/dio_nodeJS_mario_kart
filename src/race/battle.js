import { items } from './items.js';
import { raceSkillTest, rollD6 } from '../utils.js';

// TESTE PARA BLOCO DE CONFRONTO
// No caso de blocos de CONFRONTO, o desafio proposto pelo tutor da DIO é adicionar bombas, turbos e cascos, com modificações específicas na pontuação
// Adicionei uma lista de items com diferentes valores no arquivo items.js. Com isso é possível adicionar mais items a vontade sem afetar a lógica de confronto
async function battle(charactersList) {
      let block = "CONFRONTO";
      let char1 = {}; 
      let char2 = {};

      // Seleciona 2 corredores aleatoriamente para batalhar
      do {
        let roll1 = Math.floor(Math.random() * charactersList.length);
        let roll2 = Math.floor(Math.random() * charactersList.length);
        
        char1 = charactersList[roll1];
        char2 = charactersList[roll2];
      } while (char1 === char2)

 
      let char1Index = charactersList.lastIndexOf(char1); 
      let char2Index = charactersList.lastIndexOf(char2); 
      
  
      console.log(`${char1.name} entrou em confronto com ${char2.name}! 🥊`);

      console.log("   ");

      //Recebe os resultados do teste da habilidade Poder
      let char1Power = raceSkillTest(char1, block);
      let char2Power = raceSkillTest(char2, block);      
  
      console.log("   ");

      //Determina qual item foi utilizado na batalha
      //Adicionado uma chance de 33% de conseguir um turbo, que dá +1 ponto ao vencedor
      let randomItem = items[Math.floor(Math.random() * items.length)];


      if (char1Power > char2Power) {
        console.log(
          `${char1.name} usou ${randomItem.icon} ${randomItem.name}! ${char2.name} perdeu ${randomItem.points} ponto(s)`
        );
        charactersList[char2Index].score -= randomItem.points;
        if (charactersList[char1Index].score < 0) charactersList[char1Index].score = 0;
        let d6 = rollD6(); 
        if ( d6 >= 5) {
            console.log(`${char1.name} conseguiu um 🍄 cogumelo turbo! Ganhou 1 ponto!`);
          charactersList[char1Index].score += 1;
        }
      }

      if (char2Power > char1Power) {
        console.log(
          `${char2.name} usou ${randomItem.icon} ${randomItem.name}! ${char1.name} perdeu ${randomItem.points} ponto(s)`
        );
        charactersList[char1Index].score -= randomItem.points;
        if (charactersList[char1Index].score < 0) charactersList[char1Index].score = 0;
        let d6 = rollD6(); 
        if ( d6 >= 5) {
            console.log(`${char2.name} conseguiu um 🍄 cogumelo turbo! Ganhou 1 ponto!`);
          charactersList[char2Index].score += 1;
        }
      }

      if (char1Power === char2Power) {
        console.log( "Confronto empatado! Nenhum ponto foi perdido");
      }
  
      console.log("   ");

      return charactersList;
    };


    export { battle }