import { playRaceEngine, declareWinner } from './race/race.js';
import { characters } from './characters.js';

const players = [characters[1], characters[5]];

(async function main() {
console.log(`
███╗   ███╗ █████╗ ██████╗ ██╗ ██████╗       ██╗  ██╗ █████╗ ██████╗ ████████╗
████╗ ████║██╔══██╗██╔══██╗██║██╔═══██╗      ██║ ██╔╝██╔══██╗██╔══██╗╚══██╔══╝
██╔████╔██║███████║██████╔╝██║██║   ██║      ██████╔╝███████║██████╔╝   ██║
██║╚██╔╝██║██╔══██║██╔══██╗██║██║   ██║      ██╔═██╗ ██╔══██║██╔══██╗   ██║
██║ ╚═╝ ██║██║  ██║██║  ██║██║╚██████╔╝      ██║  ██╗██║  ██║██║  ██║   ██║
╚═╝     ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝ ╚═════╝       ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝
`);

  await playRaceEngine(players);
  await declareWinner(players);
})();
