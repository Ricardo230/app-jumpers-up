var path = require("path"),
    rootPath = path.normalize(__dirname + '/..');

module.exports = 
    {
			production: {
        db: 'mongodb://localhost/JumpersUp_db',
				url: 'http://localhost:3000',
        root: rootPath,
        app: {
          name: 'JumpersUp'
        },
        port: 3000
      },
      development: {
        db: "mongodb://localhost/JumpersUp_dev",
				url: 'http://localhost:3001',
        root: rootPath,
        app: {
          name: 'JumpersUp Dev'
        },
        port: 3001
      },
      test: {
        db: 'mongodb://localhost/JumpersUp_test',
				url: 'http://localhost:3002',
        root: rootPath,
        app: {
          name: 'JumpersUp Test'
        },
        port: 3002
      }
    };
