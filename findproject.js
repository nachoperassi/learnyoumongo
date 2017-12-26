var mongoClient = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/learnyoumongo';

var age = parseInt(process.argv[2]);

mongoClient.connect(url, function(err, DB) {
	if (err) {
		throw err;
	}

	let dataBase = DB.db('learnyoumongo');

	dataBase.collection('parrots')
	.find({ age: { $gt: +age } }, { fields: { _id: 0 } })
	.toArray(function(err, documents) {
		if (err) {
			throw err;
		}
		console.log(documents);
		DB.close();
	});
});