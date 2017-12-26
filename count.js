var mongoClient = require('mongodb').MongoClient;

var collectionName = 'parrots';

var databaseName = 'learnyoumongo';

var url = 'mongodb://localhost:27017/learnyounode';

var age = process.argv[2];

mongoClient.connect(url, function(err, DB) {
	var dataBase = DB.db(databaseName);

	dataBase.collection(collectionName)
	.count({ age: { $gt: +age } })
	.then(console.log)
	.catch(console.log);

	DB.close();
})
