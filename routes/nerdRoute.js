var Nerd = require('../models/nerds.js');

	module.exports = function(app) {

		// server routes ===========================================================
		// handle things like api calls
		// authentication routes

		// sample api route
		app
			.get('/api/nerds', function(req, res) {
				// use mongoose to get all nerds in the database
				Nerd.find(function(err, nerds) {

					// if there is an error retrieving, send the error. 
									// nothing after res.send(err) will execute
					if (err)
						res.send(err);

					res.json(nerds); // return all nerds in JSON format
				});
			})
			.post('/api/nerds', function(req, res){
				var nerd =  new Nerd(req.body);
				nerd.save(function(err){
					if(err){
						console.log("error al guardar nerd");
						console.log(err);
						res.send(400);
					}else{
						console.log("se ha guardado nerd ");
						console.log(nerd);
						res.send(200,nerd);
					}
				})
			})

		// route to handle creating goes here (app.post)
		// route to handle delete goes here (app.delete)

		// frontend routes =========================================================
		// route to handle all angular requests
		app.get('*', function(req, res) {
			res.sendfile('./public/index.html'); // load our public/index.html file
		});

	};