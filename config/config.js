var path = require("path"),
    rootPath = path.normalize(__dirname + '/..');

module.exports = 
    {
			production: {
        db: 'mongodb://localhost/mean_db',
				url: 'http://localhost:3000',
        root: rootPath,
        app: {
          name: 'MEAN'
        },
        port: 3000
      },
      development: {
        db: "mongodb://localhost/mean_dev",
				url: 'http://localhost:3001',
        root: rootPath,
        app: {
          name: 'MEAN Dev'
        },
        port: 3001
      },
      test: {
        db: 'mongodb://localhost/mean_test',
				url: 'http://localhost:3002',
        root: rootPath,
        app: {
          name: 'MEAN Test'
        },
        port: 3002
      }
    };
