import { shuffleArray } from "../../utilities";

export type PlayerLevels = string[];
type Team = PlayerLevels[];

// Funcion principal para sortear los equipos, crea el array que se devuelve al front
export const teamSorter = (
  level1: PlayerLevels,
  level2: PlayerLevels,
  level3: PlayerLevels,
  level4: PlayerLevels,
  level5: PlayerLevels,
  teamCount: number
) => {
  teamCount = teamCount;
  // Array con arrays, aqui se guardaran todos los equipos
  let teamArray: Team = [];
  // agrega arrays vacios cuantos requiera el usuario
  for (let i = 0; i < teamCount; i++) teamArray.push([]);

  teamArray = sortAndArrangeTeams(level5, teamArray, teamCount);
  teamArray = sortAndArrangeTeams(level4, teamArray, teamCount);
  teamArray = sortAndArrangeTeams(level3, teamArray, teamCount);
  teamArray = sortAndArrangeTeams(level2, teamArray, teamCount);
  teamArray = sortAndArrangeTeams(level1, teamArray, teamCount);

  return teamArray;
};

const sortAndArrangeTeams = (
  level: PlayerLevels,
  teamArray: Team,
  teamCount: number
) => {
  teamArray = sortPlayers(level, teamArray, teamCount);

  // Sorteará los equipos para tener los que tengan menos integrantes de primero y llenarlos
  return teamArray.sort((a, b) => Number(a.length) - Number(b.length));
};

// Sortea los jugadores en los equipos
export const sortPlayers = (
  level: PlayerLevels,
  teamArray: Team,
  teamCount: number
) => {
  if (!level.length) {
    return teamArray;
  }

  // Randomiza el orden del array para repartir
  level = shuffleArray(level);
  // por cada jugador de un nivel, los reparto a los equipos
  level.forEach((lev: string, index: number) => {
    const playerIndex = index % teamCount;
    teamArray[playerIndex].push(lev);
  });

  return teamArray;
};

module.exports = {
  teamSorter,
  sortPlayers,
};
