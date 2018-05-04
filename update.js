var mongoClient = require('mongodb').MongoClient;

var name = process.argv[2];

var collection = 'users';

var url = `mongodb://localhost:27017/learnyoumongo`;

mongoClient.connect(url, function(err, DB) {
	var dataBase = DB.db(name);

	dataBase
	.collection('users')
	.updateOne({ username: 'tinatime' }, { $set: { age: 40 } })
	.then(function(data) {
		console.log('New age: 40');
	}).catch(console.log);

	DB.close();
})

