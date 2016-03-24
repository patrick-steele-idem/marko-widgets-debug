var express = require('express');
var router = express.Router();
var template = require('./template.marko');

/* GET home page. */
router.get('/', function(req, res) {
  template.render({}, res);
});
module.exports = router;
 
