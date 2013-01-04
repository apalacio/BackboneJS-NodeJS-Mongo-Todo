//VARIABLES
var application_root = __dirname,
	express = require("express"),
	path = require("path"),
	mongoose = require("mongoose");

//SERVER
var app = express();
 
//DB
mongoose.connect('mongodb://localhost:29000/my_database');

var Todo = mongoose.model('Todo', new mongoose.Schema({
	text: String,
	done: Boolean, 
	order: Number
}));	
	

app.configure(function(){
	app.use(express.bodyParser()); //used to parses JSON request bodies
	app.use(express.methodOverride());
	app.use(app.router);
	app.use(express.static(path.join(application_root, "public")));
	app.set('views', path.join(application_root, "views"));	
	app.set('view engine', 'jade');
	app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});


//ROUTER
app.get('/', function(req,res){
	res.send('Hello World');	
});

app.get('/todo', function(req, res){		
		res.render('todo', {title: "Our Sample Application"});
});
	
app.get('/api/todos', function(req, res){
		return Todo.find(function(err, todos){
			return res.send(todos);
		});
});
	
app.get('/api/todos/:id', function (req, res) {
		return Todo.findById(function(){
			if(!err){
				return res.send(todo);
			}
		});
});
	 
app.put('/api/todos/:id', function(req, res){
	 	return Todo.findById(req.params.id, function(err, todo){
	 		todo.text = req.body.text;
	 		todo.done = req.body.done;
	 		todo.order = req.body.order;
	 		return todo.save(function(err){
	 			if(!err){
	 				console.log("updated");
	 			}
	 			return res.send(todo);
	 		});
	 	});
});
	
app.post('/api/todos', function(req, res){
		var todo;
		todo = new Todo({
			text: req.body.text,
			done: req.body.done,
			order: req.body.order
		});
		todo.save(function(err){
			if (!err){
				return console.log("created.");
			}			
		});
		return res.send(todo);
});
	
app.delete('/api/todos/:id', function(req, res){
		return Todo.findById(req.params.id, function(){
			return todo.remove(function(err){
				if(!err){
					console.log("removed.")
					return res.send('');
				}
			});	
		});
});

var serverPort = 4000;
app.listen(serverPort);

console.log('Server Started on port '+serverPort.toString());






