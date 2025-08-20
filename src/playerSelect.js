import { characters } from './characters.js';
import * as utils from './race/utils.js';



// Permite a seleção de corredores, de acordo com input do usuário
export async function playerSelect() {
  let racers = [];

  console.log(`
  ======================================================================================
  
                  --- Selecione os participantes da corrida---
  Digite primeiro a quantidade de corredores, de 1 a 6 e em seguida os digítos de cada
  corredor que estará participando
  
  ======================================================================================
  
        1 🪠  Mario       || Velocidade: 4 | Manobrabilidade: 3 | poder: 3
        2 👷 Luigi       || Velocidade: 3 | Manobrabilidade: 4 | poder: 3
        3 👸 Peach       || Velocidade: 2 | Manobrabilidade: 4 | poder: 4
        4 🦖 Yoshi       || Velocidade: 3 | Manobrabilidade: 5 | poder: 2
        5 🐲 Bowser      || Velocidade: 3 | Manobrabilidade: 2 | poder: 5
        6 🐒 Donkey Kong || Velocidade: 2 | Manobrabilidade: 3 | poder: 5

  ======================================================================================
  `);
  
  
  let newRacersSelected = false;
  let validRacerNumber = false;
  let playerNumber;
  let newRacer;
  
  do {
    playerNumber = await utils.askQuestion("Quantos corredores irão participar? ");
    validRacerNumber = utils.verifyRacer(playerNumber);
  } while (validRacerNumber === false);
  
  do {
      validRacerNumber = false;
      newRacersSelected = false;  

      do {
        newRacer = await utils.askQuestion("Digite o número de um dos corredores quer irá participar: ");
        validRacerNumber = utils.verifyRacer(newRacer);
      } while (validRacerNumber === false);

      if (newRacer !== null) {
        if (racers.includes(characters[newRacer - 1])) {
          console.log("Corredor já participando.");
          console.log(" ");
        } else {
          console.log(`${characters[newRacer - 1].name} foi selecionado.`);
          racers.push(characters[newRacer - 1]);
          console.log(" ");
        }
      } else {
        console.log("Corredor já participante ou número incorreto. Digite um novo número: ");
        console.log(" ");
      }

       
      if (racers.length === parseInt(playerNumber)) {
        newRacersSelected = true;
      }

    } while (newRacersSelected === false);
  
  
  console.log(`Corredores selecionados!
  
  ============================`);
  return racers
}
