var express = require('express');
var router = express.Router();
var t1Controller = require('../controllers/t1');
var t2Controller = require('../controllers/t2');
var t3Controller = require('../controllers/t3');
var t4Controller = require('../controllers/t4');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/t1/I/want/title', t1Controller.getTitles);
router.get('/t2/I/want/title', t2Controller.getTitles);
router.get('/t3/I/want/title', t3Controller.getTitles);
router.get('/t4/I/want/title', t4Controller.getTitles);

module.exports = router;
