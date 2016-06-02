const mongoose = require("mongoose"),
	Contacts = mongoose.model("Contact");

exports.createContact = function(req, res, next) {
	console.log(req.body);
	const newContact = req.body;
	Contacts.create(newContact, function(err, contacts) {
		if(err) {
			return res.status(400);
		} else {
			console.log('im here');
			res.send({success: true, contacts: contacts})
		}
	});
}

exports.getContact = function(req, res) {
	Contacts.find().exec(function(err, contacts) {
		if(err) {
			return res.status(400);
		} else {
			res.send(contacts);
		}
	});
}