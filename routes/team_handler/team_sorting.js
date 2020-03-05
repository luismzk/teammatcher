const express = require('express');
var router = express.Router();

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

    var array1 = ["a"];
    var array2 = ["b", "d"];
    var array3 = ["c"];
    // Array con arrays, aqui se guardaran todos los equipos
    var teamArray = [ array1, array2, array3];

    // Sorteará los equipos para tener los que tengan menos integrantes de primero y llenarlos
    teamArray.sort((a, b) => Number(a.length) - Number(b.length));

    console.log(teamArray);

    return teamArray;

}

function pushToTeam(player, teamIndex){

    switch (teamIndex){
      case 0:
        team1.push(player);
        break;
      case 1:
        team2.push(player);
        break;
      case 2:
        team3.push(player);
        break;
    }

}

module.exports = router;
