const express = require('express');
var router = express.Router();

router.get('/', async function (req, res) {
  try {

    res.render('landing/homepage', {
      host: req.headers.host,
      user: req.user
    });


  } catch (e) {
    console.log(e);
    //res.redirect('/404');
    res.send("error")
  }
});

module.exports = router;
