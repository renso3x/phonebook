const express = require("express"),
	bodyParser = require("body-parser"),
	cookieParser = require("cookie-parser");

module.exports = function(app, config) {
	app.use('/static', express.static(config.rootPath + '/public'))
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({'extended':'true'}));
	app.use(cookieParser());

}