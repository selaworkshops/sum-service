var appRouter = function (app) {

app.get("/", function(req, res) {
	res.status(404).send("Error 404, To use the sum service browse to: {server}:{port}/sum/{number1}/{number2}");
})
  
app.get("/sum/:number1/:number2", function(req,res) {
    var number1 = parseInt(req.params.number1);
    var number2 = parseInt(req.params.number2);
    var total = number1 + number2;

	var body = {
		"first-number": number1,
		"second-number": number2,
		"operation": "sum",
		"total": total
	}
	
	res.setHeader('Access-Control-Allow-Origin', 'null');
	return res.status(200).end(JSON.stringify(body));
	  
  });
}

module.exports = appRouter;
