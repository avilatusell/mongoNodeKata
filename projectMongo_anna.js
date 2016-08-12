var express = require('express');
var mongo = require('mongodb').MongoClient;
var app = express();

// Connection URL
var url = 'mongodb://localhost:27017/learnyoumongo';

// Use connect method to connect to the Server
mongo.connect(url, function(err, db) {

	if (err) throw new Error("something failed in the connection");

	app.get('/parrots', function(req,res) {
		console.log("Connected correctly to server");
		findCollection(db, function( data ) {
				res.json(data);
        db.close();
		});
	});
});

	app.listen(27017, function() {
		console.log ("listening to port 27017");
	});


// Find some documents
function findCollection(db,callback) {
	var collection = db.collection('parrots')   //db.collection('<collection name>')

	collection.find({ age: {$gt:18 }}).toArray(function(err, documents) {
		console.log("Found the following records");
		console.dir(documents);
		callback(documents);
	})
}