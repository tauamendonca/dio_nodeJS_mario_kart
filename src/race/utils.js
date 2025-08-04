// Rola um dado de 6 faces
async function rollDice(charactersList) {
  let diceResults = []
    
    for (let i = 0; i < charactersList.length; i++) {
      diceResults.push(Math.floor(Math.random() * 6) + 1)
    }
    
  return diceResults; 
}

// Imprime o resultado da rolagem de dados dos jogadores
async function logRollResult(characterName, block, diceResult, attribute) {
  console.log(
    `${characterName} 🎲 rolou um dado de ${block} ${diceResult} + ${attribute} = ${
      diceResult + attribute
    }`
  );
}

export {rollDice, logRollResult};