// server.js
const express  = require('express'),
 bodyParser = require('body-parser'),
 app      = express(),
 port     = process.env.PORT || 5050;


app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));


app.set('view engine', 'ejs'); // set up ejs for templating

// api ========================================================================
app.use('/api', require('./routes/server.api')); // middleware


// routes ======================================================================
require('./app/render.js')(app); // load our routes


// launch ======================================================================
app.listen(port);
console.log('The magic happens on port ' + port);
