const express = require('express');
var router = express.Router();

var algorithms = require('../../js/algorithms');

router.get('/sortTeams', async function (req, res) {

  try {

    var sortedTeams = teamSorter(req.query.level1, req.query.level2, req.query.level3, req.query.level4, req.query.level5);
    
    res.send({ team1: sortedTeams[0], team2: sortedTeams[1], team3: sortedTeams[2] });

  } catch (e) {

    console.log(e);
    res.sendStatus(500);

  }

});


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

  console.log(teamArray);

  return teamArray;

}

function sortPlayers(level, teamArray){

  // Arrays de equipos para llenar con jugadores
  var team1 = teamArray[0];
  var team2 = teamArray[1];
  var team3 = teamArray[2];

  if (level){
    console.log(level, "pre")
    // Randomiza el orden del array para repartir
    level = algorithms.shuffleArray(level)
    console.log(level, "post")

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

module.exports = router;
