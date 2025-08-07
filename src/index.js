import { playRaceEngine, declareWinner } from './race/race.js';
import { characters } from './characters.js';

const players = [characters[0], characters[1], characters[3], characters[4], characters[5]];


(async function main() {

console.log(`
███╗   ███╗ █████╗ ██████╗ ██╗ ██████╗       ██╗  ██╗ █████╗ ██████╗ ████████╗
████╗ ████║██╔══██╗██╔══██╗██║██╔═══██╗      ██║ ██╔╝██╔══██╗██╔══██╗╚══██╔══╝
██╔████╔██║███████║██████╔╝██║██║   ██║      ██████╔╝███████║██████╔╝   ██║
██║╚██╔╝██║██╔══██║██╔══██╗██║██║   ██║      ██╔═██╗ ██╔══██║██╔══██╗   ██║
██║ ╚═╝ ██║██║  ██║██║  ██║██║╚██████╔╝      ██║  ██╗██║  ██║██║  ██║   ██║
╚═╝     ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝ ╚═════╝       ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝
`);

let playerPositions = await playRaceEngine(players);
await declareWinner(playerPositions);
})();
