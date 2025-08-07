// Rola um dado de 6 faces
async function rollDice(charactersList) {
  let diceResults = []
    
    for (let i = 0; i < charactersList.length; i++) {
      diceResults.push(Math.floor(Math.random() * 6) + 1)
    }

  return diceResults; 
}

export { rollDice };