const express = require('express');
var router = express.Router();

router.get('/', async function (req, res) {
  try {

    var levels = [1, 2, 3, 4, 5]

    res.render('landing/homepage', {
      host: req.headers.host,
      user: req.user,
      levels
    });


  } catch (e) {
    console.log(e);
    //res.redirect('/404');
    res.send("error")
  }
});

module.exports = router;
