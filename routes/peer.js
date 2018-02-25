var express = require('express');
var router = express.Router();
var uuid = require('uuid/v1');
var con = require('../mariadbcon/connection');

/* GET users listing. */
router.post('/', function(req, res, next) {

  // Fetching Parameters
  var webNodeId = req.param('webnodeid');
  var zoneId = uuid(); // Generate random zone id
  var id = uuid(); // Generate random id

  // MariaDB Connection
  var c = con.establishConnection();

  c.query('INSERT INTO `oysterpeer`.`peering` (`id`, `webnodeid`, `zoneid`) VALUES (:id, :webnodeid, :zoneid)',
        { 
            id: id, 
            webnodeid: webNodeId, 
            zoneid: zoneId 
        },
        function(err, rows) {
            if (err)
                throw err;
        res.send(rows)
  });

});

module.exports = router;