const path = require('path');
const rootPath = path.normalize(__dirname + '/../../');

module.exports = {
	development: {
		db: 'mongodb://localhost/phonebook',
		rootPath: rootPath,
		port: process.env.PORT || 3000
	},
	production: {
		db: 'mongodb://multivision:multivision@ds017173.mlab.com:17173/multivision',
		rootPath: rootPath,
		port: process.env.PORT || 80
	}
}