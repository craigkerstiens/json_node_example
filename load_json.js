var parsedJSON = require('./example.json');

var express = require("express");
var app = express();
var http = require('http');

var massive = require("massive");
var connectionString = "postgres://:@localhost/massive";

var db = massive.connectSync({connectionString : connectionString});

for(i = 0; i < parsedJSON.posts.length; i++) {
	db.saveDoc("posts", parsedJSON.posts[i], function(err,res){});
};
