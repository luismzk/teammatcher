
const { shuffleArray } = require('../../utilities');

// Funcion principal para sortear los equipos, crea el array que se devuelve al front
function teamSorter(level1, level2, level3, level4, level5){

  // Array con arrays, aqui se guardaran todos los equipos
  var teamArray = [ [], [], [] ];

  teamArray = sortPlayers(level1, teamArray);
  
  // Sorteará los equipos para tener los que tengan menos integrantes de primero y llenarlos
  teamArray.sort((a, b) => Number(a.length) - Number(b.length));

  teamArray = sortPlayers(level2, teamArray);
  
  // Sorteará los equipos para tener los que tengan menos integrantes de primero y llenarlos
  teamArray.sort((a, b) => Number(a.length) - Number(b.length));

  teamArray = sortPlayers(level3, teamArray);
  
  // Sorteará los equipos para tener los que tengan menos integrantes de primero y llenarlos
  teamArray.sort((a, b) => Number(a.length) - Number(b.length));

  teamArray = sortPlayers(level4, teamArray);
  
  // Sorteará los equipos para tener los que tengan menos integrantes de primero y llenarlos
  teamArray.sort((a, b) => Number(a.length) - Number(b.length));

  teamArray = sortPlayers(level5, teamArray);
  
  // Sorteará los equipos para tener los que tengan menos integrantes de primero y llenarlos
  teamArray.sort((a, b) => Number(a.length) - Number(b.length));

  return teamArray;

}

// Sortea los jugadores en los equipos
function sortPlayers(level, teamArray){

  // Arrays de equipos para llenar con jugadores
  var team1 = teamArray[0];
  var team2 = teamArray[1];
  var team3 = teamArray[2];

  if (level){

    // Randomiza el orden del array para repartir
    level = shuffleArray(level)

    level.forEach( (lev, index) => {
      switch(index % 3){
        case 0:
          team1.push(lev);
          break;
        case 1:
          team2.push(lev);
          break;
        case 2:
          team3.push(lev);
          break;
      }
    })

  }

  return [team1, team2, team3]

}

module.exports = {
  teamSorter,
  sortPlayers
}