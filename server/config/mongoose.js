const mongoose = require("mongoose");
const contacts = require("../models/Contact");

module.exports = function(config) {
	mongoose.connect(config.db);
	const db = mongoose.connection;

	db.on('error', console.error.bind(console, 'connection error'));
	db.once('open', function() {
		console.log("connected!");
	});

	contacts.createContactSchema();
}