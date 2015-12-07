var massive = require("massive");
var connectionString = "postgres://:@localhost/massive";

var db = massive.connectSync({connectionString : connectionString});

db.posts.findDoc({category: 'Postgres'}, function(err,docs){
	console.log(docs);
});

db.posts.searchDoc({
	keys : ["title", "category"],
	term : ["Postgres"]
}, function(err,docs){
	console.log(docs);
})
