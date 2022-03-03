const express = require('express');
var router = express.Router();

const { teamSorter } = require('./utils');

router.get('/sortTeams', async function (req, res) {

  try {

    let sortedTeams = teamSorter(req.query.level1, req.query.level2, req.query.level3, req.query.level4, req.query.level5, req.query.teamCount);
    
    return res.send(sortedTeams);

  } catch (e) {

    console.log(e);
    res.sendStatus(500);

  }

});


module.exports = router;
