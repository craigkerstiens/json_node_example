var parsedJSON = require('./example.json');

var express = require("express");
var app = express();
var http = require('http');

var massive = require("massive");
var connectionString = "postgres://:@localhost/massive";

var db = massive.connectSync({connectionString : connectionString});

function exit() {
	process.exit(0);
}

console.log('adding json docs to postgres...');
var i = 0;
(function insert() {
    if (i < parsedJSON.posts.length) {
        db.saveDoc("posts", parsedJSON.posts[i], function(err,res){
					console.log('added post ' + i + ' to postgres://@localhost/massive');
					i++;
					insert();
				});
    } else {
			console.log('run `node massive_search.js` to see the inserted posts.');
			exit();
		}
})();
