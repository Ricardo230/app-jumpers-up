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
        port: 5001
      },
      development: {
        db:"mongodb://heroku_v6m3wl9c:350punonkng0u7spd2l46grbvm@ds041140.mongolab.com:41140/heroku_v6m3wl9c",
        //db: "mongodb://localhost/JumpersUp_dev",
				url: 'https://app-jumpers-up.herokuapp.com/',
        root: rootPath,
        app: {
          name: 'JumpersUp Dev'
        },
        port: process.env.PORT || 5000
      },
      test: {
        db: 'mongodb://localhost/JumpersUp_test',
				url: 'http://localhost:3002',
        root: rootPath,
        app: {
          name: 'JumpersUp Test'
        },
        port: 5002
      }
    };
