var appRouter = function (app) {
var sum = require('./../sum.js');

app.get("/", function(req, res) {
	res.status(404).send("Error 404, To use the sum service browse to: {server}:{port}/sum/{number1}/{number2}");
})
  
app.get("/sum/:number1/:number2", function(req,res) {
    var number1 = req.params.number1;
    var number2 = req.params.number2;
    var total = sum.sum(number1,number2);
    res.send(JSON.stringify(total));
  });
}

module.exports = appRouter;
