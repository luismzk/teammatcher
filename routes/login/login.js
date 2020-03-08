
const express = require('express');
var router = express.Router();
const db = require('../../db/queries')

router.get('/users', db.getUsers)


module.exports = router;