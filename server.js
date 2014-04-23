// server.js
// set up ========================
	var express  = require('express');
	var app      = express(); 								// create our app w/ express
	var mongoose = require('mongoose'); 					// mongoose for mongodb

	// configuration =================

	

	app.configure(function() {
		app.use(express.static(__dirname + '/public')); 		// set the static files location /public/img will be /img for users
		app.use(express.logger('dev')); 						// log every request to the console
		app.use(express.bodyParser()); 							// pull information from html in POST
		app.use(express.methodOverride()); 						// simulate DELETE and PUT
	});

	mongoose.connect('mongodb://localhost/parkMonDB');
	var db = mongoose.connection;
	db.on('error', console.error.bind(console, 'connection error:'));
	db.once('open', function callback () {
		console.log("connected")
	});

	// define model =================
	var Spot = mongoose.model('Spot', {
		name : String,
		numOpenSpots : Number
	});
	
// routes ======================================================================
	
	// get all spots
	app.get('/api/spots', function(req, res) {
		
		// use mongoose to get all spots in the database
		Spot.find(function(err, spots) {

			// if there is an error retrieving, send the error. nothing after res.send(err) will execute
			if (err)
				res.send(err)

			res.json(spots); // return all spots in JSON format
		});
	});

	// create Spot and send back all spots after creation
	app.post('/api/spots', function(req, res) {
		// create a Spot, information comes from AJAX request from Angular
		Spot.create({
			name : req.body.name,
			done : false,
			numOpenSpots : req.body.numOpenSpots
		},function(err, spot) {
			if (err)
				res.send(err);

			// get and return all the spots after you create another
			Spot.find(function(err, spots) {
				if (err)
					res.send(err)
				res.json(spots);
			});
		});
	});

	// delete a spot
	app.delete('/api/spots/:spot_id', function(req, res) {
		Spot.remove({
			_id : req.params.spot_id
		}, function(err, spot) {
			if (err)
				res.send(err);

			// get and return all the spots after you create another
			Spot.find(function(err, spots) {
				if (err)
					res.send(err)
				res.json(spots);
			});
		});
	});

	// application -------------------------------------------------------------
	app.get('*', function(req, res) {
		res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
	});

	// listen (start app with node server.js) ======================================
	app.listen(3000);
	console.log("App listening on port 3000");
