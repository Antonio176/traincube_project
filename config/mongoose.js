var config = require('./config');
var mongoose = require('mongoose');


var Grid = require('gridfs-stream');

// @param {Object} app - express app instance
module.exports.init = function(app) {  
  var Schema;
  var conn;

  Grid.mongo = mongoose.mongo;
  conn = mongoose.createConnection('mongodb:/localhost/gridfs');
  conn.once('open', function () {
    var gfs = Grid(conn.db);
    app.set('gridfs', gfs);
    // all set!
  });

app.set('mongoose', mongoose);
Schema = mongoose.Schema;
// setup the schema for DB
require('../db/schema')(Schema, app);
};

module.exports = function(){
    var db = mongoose.connect(config.db);
    require('../app/models/user.server.model');//register the user model
    return db;
};