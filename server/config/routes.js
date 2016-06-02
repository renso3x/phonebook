const path = require('path'),
	contacts = require('../controllers/contact');

module.exports = function(app, config){
	app.get('/', function(req, res) {
	 	res.sendFile(path.join(config.rootPath + '/public/index.html'));
	});

	app.get('/api/contacts',contacts.getContact);
	app.post('/api/contacts',contacts.createContact);
}