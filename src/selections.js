import { characters } from './characters.js';
import { verifyRacer, askQuestion, checkNumber } from './utils.js'; 



// Permite a seleção de corredores, de acordo com input do usuário
export async function playerSelect() {
  let racers = [];

  selectionScreen();
  
  let newRacersSelected = false;
  let validNumberOfParticipants = false;
  let validRacerNumber = false;
  let playerNumber;
  let newRacer;
  
  do {
    playerNumber = await askQuestion("Quantos corredores irão participar? ");
    if (playerNumber <= 1) {
      console.log('Precisamos de pelo menos 2 competidores');
    } else {
      validNumberOfParticipants = verifyRacer(playerNumber);
    }
  } while (validNumberOfParticipants === false);
  
  console.log('  ');

  if (parseInt(playerNumber) === characters.length) {
      racers = characters;
      console.log(`Todos os corredores irão participar da corrida!`);
  } else {
      do {

          do {
            newRacer = await askQuestion("Digite o número de um dos corredores quer irá participar: ");
            validRacerNumber = verifyRacer(newRacer);
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
      
      console.log(`Corredores selecionados!`);
  }
  
  console.log(`
  
  ============================
  `);
  return racers
}


export async function selectLength() {
  let raceLength;
  let validLength = false;

  do {
    raceLength = await askQuestion("Quantas rodadas a corrida terá? ");
    if (checkNumber(raceLength)) {
      validLength = true;
        console.log(`
  A corrida terá ${raceLength} rodadas! Confrontos podem ocorrer entre elas, fiquem ligados!
  
======================================================================================`);
      return raceLength;
    } else {
      console.log('Por favor, insira um número válido.');
    }
  } while (validLength === false);

}



function selectionScreen() {
  console.log(`
  ======================================================================================
  
                  --- Selecione os participantes da corrida---
  Digite primeiro a quantidade de corredores, de 1 a ${characters.length} e em seguida os digítos de cada
  corredor que estará participando
  
  ======================================================================================
  `);
   
  for (let i = 0; i < characters.length; i++) {
    console.log(`${characters[i].ID}  ${characters[i].icon}  ${characters[i].name}  || Velocidade: ${characters[i].speed} | Manobrabilidade: ${characters[i].handling} | Poder: ${characters[i].power}`)
  }

  console.log('');

  // Resultado esperado
  // 1 🪠  Mario       || Velocidade: 4 | Manobrabilidade: 3 | poder: 3
  // 2 👷 Luigi       || Velocidade: 3 | Manobrabilidade: 4 | poder: 3
  // 3 👸 Peach       || Velocidade: 2 | Manobrabilidade: 4 | poder: 4
  // 4 🦖 Yoshi       || Velocidade: 3 | Manobrabilidade: 5 | poder: 2
  // 5 🐲 Bowser      || Velocidade: 3 | Manobrabilidade: 2 | poder: 5
  // 6 🐒 Donkey Kong || Velocidade: 2 | Manobrabilidade: 3 | poder: 5

  console.log('======================================================================================');
  console.log('  ');  
}