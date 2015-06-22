var express        	= require('express');
var morgan         	= require('morgan');
var bodyParser     	= require('body-parser');
var methodOverride 	= require('method-override');
var env 			      = process.env.NODE_ENV || 'development';
var mongoose   		  = require('mongoose');
var app            	= express();
var fs 				      = require('fs');
var passport 		    = require('passport');
var config			    = require('./config/config')[env];
var LocalStrategy 	= require('passport-local').Strategy;
var server          = require('http').Server(app);
var io              = require('socket.io')(server);
//var socket          = require('./routes/socket.js');

GLOBAL.config 			= config;

//Connecting to a database -- See config/config.js
mongoose.connect(config.db, function(err, res) {
  if(err) { 
  	console.log('ERROR: connecting to Database.' + err); 
  }else{
  	console.log('Connected to Database'); 
  }
});

/** Configuración de librería Passport **/
/*var Account = require('./models/AccountsModel');
passport.use(new LocalStrategy(Account.authenticate()));
passport.serializeUser(Account.serializeUser());
passport.deserializeUser(Account.deserializeUser());*/

//configuring app.use()
app.use(function (req, res, next) {
	/** Permite hacer peticiones al API desde otros dominios **/
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type, Authorization');
	res.setHeader('Access-Control-Allow-Credentials', true);
	next();
});

app.use(passport.initialize());
app.use(passport.session());

app.env = env;
app.config = config;
app.secret = "$3cR3tK3Y-Jump3r5upp.";

require('./config/express')(app);

//io.sockets.on('connection', socket);

//app.use(express.static(__dirname + '/public')); 	// set the static files location /public/img will be /img for users
app.use(morgan('dev')); 							// log every request to the console
app.use(bodyParser.urlencoded({ extended: false })) // parse application/x-www-form-urlencoded
app.use(bodyParser.json())    						// parse application/json
app.use(methodOverride()); 							// simulate DELETE and PUT

/** Lee todos los archivos de la carpeta routes **/
routes_path = __dirname + '/routes';
fs.readdirSync(routes_path).forEach(function(file) {
  var arrRouteSplit = file.split(".");
  if (arrRouteSplit[0] != "")
     require('./routes/'+arrRouteSplit[0])(app);
});

app.use(function(err, req, res, next){
  if (err.constructor.name === 'UnauthorizedError') {
    res.status(401).send({error:'Unauthorized'});
  }
	console.log(err);
});

server.listen(app.get('port'), function() {
  console.log("Node server running on "+config.url + app.get('port'));
});