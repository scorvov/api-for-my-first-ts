var express = require('express');
var router = express.Router();
var {isAuth} = require('../utils');

/* GET home page. */
router.get('/', function(req, res, next) {
  isAuth(req, res, () => res.send());
});

module.exports = router;
