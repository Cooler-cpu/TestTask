// app/routes.js
module.exports = function(app) 
{
	app.get('/', function(req, res) {

		// render the page and pass in any flash data if it exists
		res.render('./index.ejs');
	});
}
