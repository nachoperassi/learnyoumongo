var mongoClient = require('mongodb').MongoClient;
var objectId = require('mongodb').ObjectID;

var databaseName = process.argv[2];

var collectionName = process.argv[3];

var url = `mongodb://localhost:27017/${databaseName}`;

var id =  process.argv[4];

mongoClient.connect(url, function(err, DB) {
	if (err) {
		console.log(1);
	}

	var dataBase = DB.db(databaseName);

	dataBase.collection(collectionName).deleteOne({ _id : id })
	.then(function(data) {
		console.log('deleted');
	})
	.catch(function(reason) {
		console.log('failed');
	});

	DB.close();
})