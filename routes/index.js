var express = require('express');
var router = express.Router();
var jsend = require('jsend');
router.use(jsend.middleware);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.jsend.success({
    message: "Hello World"
  })
});

module.exports = router;
