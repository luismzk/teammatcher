
const { shuffleArray } = require('../../utilities');

// Funcion principal para sortear los equipos, crea el array que se devuelve al front
function teamSorter(level1, level2, level3, level4, level5, teamCount){

  // Array con arrays, aqui se guardaran todos los equipos
  let teamArray = [];
  // agrega arrays vacios cuantos requiera el usuario
  for (let i = 0; i < teamCount; i++)
    teamArray.push([])


  teamArray = sortAndArrangeTeams(level1, teamArray);
  teamArray = sortAndArrangeTeams(level2, teamArray);
  teamArray = sortAndArrangeTeams(level3, teamArray);
  teamArray = sortAndArrangeTeams(level4, teamArray);
  teamArray = sortAndArrangeTeams(level5, teamArray);

  console.log(teamCount, teamArray)
  return teamArray;

}
const sortAndArrangeTeams = (level, teamArray) => {
  teamArray = sortPlayers(level, teamArray);
  
  // Sorteará los equipos para tener los que tengan menos integrantes de primero y llenarlos
  return teamArray.sort((a, b) => Number(a.length) - Number(b.length));

}

// Sortea los jugadores en los equipos
function sortPlayers(level, teamArray){

  if (level){
    // Randomiza el orden del array para repartir
    level = shuffleArray(level)
    // por cada jugador de un nivel, los reparto a los equipos
    level.forEach( (lev, index) => {
      const playerIndex = index % 3;
      teamArray[playerIndex].push(lev)
    })

  }

  return teamArray

}

module.exports = {
  teamSorter,
  sortPlayers
}