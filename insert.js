var mongoClient = require('mongodb').MongoClient;

var firstName = 'Nacho';
var lastName = 'Perassi';

var url = 'mongodb://localhost:27017/learnyoumongo';

mongoClient.connect(url, function(err, DB){
	if (err){
		console.log(err);
	}

	let dataBase = DB.db('learnyoumongo');

	var jsonDoc = {
		firstName: firstName,
		lastName: lastName
	};


	dataBase.collection('docs').insertOne(jsonDoc)
	.then(function(res) {
		console.log(res.ops)
	}).catch(console.log);

	DB.close();

});