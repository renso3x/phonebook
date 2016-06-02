const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
	firstname: {type: String, required: "{PATH} is requried"},
	lastname: {type: String, required: "{PATH} is requried"},
	contactno: {type: Number, required: "{PATH} is requried"}
});

const Contact = mongoose.model('Contact', contactSchema);

function createContactSchema() {
	Contact.find({}).exec(function(err, collection) {
		if(collection.length === 0) {
			Contact.create({
				firstname: "Romeo",
				lastname: "Enso",
				contact: 0912345
			});
		}
	});
}

exports.createContactSchema = createContactSchema;