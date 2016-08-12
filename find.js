var mongo = require('mongodb').MongoClient;
var ageQuery = process.argv[2] || 18;
var url = 'mongodb://localhost:27017/learnyoumongo';

mongo.connect(url, function(err, db) {

	db.collection('parrots')
		.find({ age: { $gt: +ageQuery }  }) //filter method 
		.toArray(function(err, results) {
			if (err) throw err;
			console.log(results);
			db.close();
		})

})