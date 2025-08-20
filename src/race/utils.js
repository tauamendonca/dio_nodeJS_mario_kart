import readline from "readline";

// Rola um dado de 6 faces
async function rollDice(charactersList) {
  let diceResults = []
    
    for (let i = 0; i < charactersList.length; i++) {
      diceResults.push(Math.floor(Math.random() * 6) + 1)
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
function verifyRacer(newRacer) {
  let intRacer;

  try {
    intRacer = parseInt(newRacer);
    if (Number.isInteger(intRacer)) {
      if (intRacer < 1 || intRacer > 6) {
        console.log("Por favor, digite um número de 1 a 6");
        return false;
      } else {
        return true;
      }
    } else {
      console.log("Por favor digite um número válido, de 1 a 6");
      return false;
    }
  } catch(e) {
    console.log("Houve um erro identificando o número")
    return false
  }
};

export { rollDice, raceSkillTest, askQuestion, verifyRacer }