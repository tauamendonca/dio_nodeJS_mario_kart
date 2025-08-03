import { playRaceEngine, declareWinner } from './race.js';
import { characters } from './characters.js';

const player1 = characters[5];
const player2 = characters[1];

(async function main() {
  console.log(
    `🏁🚨 Corrida entre ${player1.NOME} e ${player2.NOME} começando...\n`
  );

  await playRaceEngine(player1, player2);
  await declareWinner(player1, player2);
})();
