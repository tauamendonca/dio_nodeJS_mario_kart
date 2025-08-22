import { playRaceEngine, declareWinner } from './race/race.js';
import { playerSelect, selectLength } from './selections.js';

// const players = [characters[0], characters[1], characters[3], characters[4], characters[5]];



(async function main() {

console.log(`
    ███╗   ███╗ █████╗ ██████╗ ██╗ ██████╗       ██╗  ██╗ █████╗ ██████╗ ████████╗
    ████╗ ████║██╔══██╗██╔══██╗██║██╔═══██╗      ██║ ██╔╝██╔══██╗██╔══██╗╚══██╔══╝
    ██╔████╔██║███████║██████╔╝██║██║   ██║      ██████╔╝███████║██████╔╝   ██║
    ██║╚██╔╝██║██╔══██║██╔══██╗██║██║   ██║      ██╔═██╗ ██╔══██║██╔══██╗   ██║
    ██║ ╚═╝ ██║██║  ██║██║  ██║██║╚██████╔╝      ██║  ██╗██║  ██║██║  ██║   ██║
    ╚═╝     ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝ ╚═════╝       ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝
`);

let players = await playerSelect();
let raceLength = await selectLength();
let playerPositions = await playRaceEngine(players, raceLength);
await declareWinner(playerPositions);
})();
