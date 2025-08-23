import readline from "readline";
import { characters } from "./characters.js";

function rollD6() {
  return Math.floor(Math.random() * 6) + 1
}

// Rola um dado de 6 faces para cada personagem participante e retorna a lista de resultados
async function rollDices(charactersList) {
  let diceResults = []
    
    for (let i = 0; i < charactersList.length; i++) {
      let rollResult = rollD6();
      diceResults.push(rollResult);
    }

  return diceResults; 
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


//Utilizado para realizar perguntas ao usuário
function askQuestion(query) {
    return new Promise(resolve => {
    rl.question(query, answer => {
      resolve(answer);
      });
    });
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });


// Verificador para evitar números incorretos na seleção de personagem
// Foi adicionado o characters length ali para caso haja um aumento na lista de personagens não haja alteração nessa lógica
function verifyRacer(newRacer) {
  let intRacer;

  try {
    intRacer = parseInt(newRacer);
    if (checkNumber(intRacer)) {
      if (intRacer > characters.length) {
        console.log(`Por favor, digite um número de 1 a ${characters.length}`);
        return false;
      } else {
        return true;
      }
    } else {
      console.log(`Por favor, digite um número válido de 1 a ${characters.length}`);
      return false;
    }
  } catch(e) {
    console.log("Houve um erro identificando o número")
    return false
  }
};


// 1e10000 = "Infinito"
function checkNumber(num){
  if (!isNaN(num) && num > 0 && num !== 1e10000) {
    return true
  } else {
    return false;
  }
}

function wait(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
}

async function viewRacePositions(racerList) {
    racerList.sort((a, b) => b.score - a.score);

  for (let i = 0; i < racerList.length; i++) {
    console.log(`POSIÇÃO ${i + 1}º --- ${racerList[i].name} --- ${racerList[i].score} ponto(s)`);   
  }
}

export { checkNumber, rollDices, raceSkillTest, askQuestion, verifyRacer, rollD6, wait, viewRacePositions }