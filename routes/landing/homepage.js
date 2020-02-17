const express = require('express');
var router = express.Router();

router.get('/', async function (req, res) {
  try {

    var levels = [1, 2, 3, 4, 5]
    var teams = [1, 2, 3]

    res.render('landing/homepage', {
      host: req.headers.host,
      user: req.user,
      levels,
      teams,
      teamNumber: teams.length
    });

  } catch (e) {

    console.log(e);
    res.send("error")

  }
});

router.post('/sortTeams', async function (req, res) {

  try {

    var array1 = ["a"];
    var array2 = ["b", "d"];
    var array3 = ["c"];

    // Array con arrays, aqui se guardaran todos los equipos
    var teamArray = [ array1, array2, array3];

    // Sorteará los equipos para tener los que tengan menos integrantes de primero y llenarlos
    teamArray.sort((a, b) => Number(a.length) - Number(b.length));

    console.log(teamArray);
    res.send({ team1: array1, team2: array2, team3: array3 });

  } catch (e) {

    console.log(e);
    res.sendStatus(500);

  }

});


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
