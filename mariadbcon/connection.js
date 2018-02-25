var Client = require('mariasql');

exports.establishConnection = function() {
    var c = new Client({
        host: '127.0.0.1',
        user: 'mariadb',
        password: 'pwd',
        db: 'oysterpeer'
      });
      return c;
};