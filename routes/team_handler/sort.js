const express = require('express');
var router = express.Router();

const { teamSorter } = require('./utilities');

router.get('/sortTeams', async function (req, res) {

  try {

    var sortedTeams = teamSorter(req.query.level1, req.query.level2, req.query.level3, req.query.level4, req.query.level5);
    
    res.send({ team1: sortedTeams[0], team2: sortedTeams[1], team3: sortedTeams[2] });

  } catch (e) {

    console.log(e);
    res.sendStatus(500);

  }

});


module.exports = router;
