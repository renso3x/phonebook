const express = require("express");
	app = express(),
	config = require("./server/config/config")[app.get('env')];

require("./server/config/express")(app, config);
require("./server/config/mongoose")(config);
require("./server/config/routes")(app, config);

app.listen(config.port, function() {
	console.log('were running');
});