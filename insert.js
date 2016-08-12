var mongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/learnyoumongo';
var user = {
	firstName : process.argv[2],
	lastName : process.argv[3] 
}


mongoClient.connect(url, function(err, db) {

	if (err) throw err;

	db.collection('users')
		.insert(user, function(err, results) {
			if (err) throw err;
			console.log(JSON.stringify(user));
			db.close();
		})
})