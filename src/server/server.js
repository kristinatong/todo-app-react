(function server(){
  var counter = 3 /*added counter for unique IDs*/
  var express = require('express');
  var bodyParser = require('body-parser');
  var path = require('path');

  var app = express();
  app.set('views', path.resolve('src', 'server', 'views'));
  app.set('view engine', 'ejs');

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  var todos = [
    {"id": 1, "text": "Hello, world!", "archive": false, "status": "active"},  //added status and archive as required field
    {"id": 2, "text": "Pick up groceries", "status": "complete", "archive": false} //added archived as required field
  ];

  app.get('/', function(req, res) {
    var bundle = `//${req.hostname}:8080/public/bundle.js`;

    res.render('index', {bundle});
  });

  app.get('/todos', function(req, res) {
    /*fixing todos json issue
    res.json(JSON.stringify(todos));
    */
    res.json(todos)
  });

  app.get('/todos/:id', function(req, res) {
    var id = req.params.id;
    var index = todos.findIndex(function(todo) {
      return todo.id === id;
    });

    res.json(JSON.stringify(todos[index]));
  });

  //route to active, completed, archived paths
  app.get('/*', function(req, res) {
    var bundle = `//${req.hostname}:8080/public/bundle.js`;

    res.render('index', {bundle});
  })

  app.post('/todos', function(req, res) {
    var text = req.body.data.text;
    if (!text) {
      return res.status(400).json({"message": "text is required"});
    }

    // var id = todos.length + 1; /*added counter for unique IDs*/
    var newTodo = { "id": counter++, "text": text, "status": "active", "archive": false };
    todos.push(newTodo);

    res.json(todos);
  });

  app.delete('/todos/:id', function(req, res) {
    /*update delete functionality*/
    // res.status(500).send({"message": "not implemented"});
    let id = parseInt(req.params.id)
    let index = todos.findIndex(todo => todo.id === id)
    res.json(todos[index])
    todos.splice(index,1)
  });

  app.put('/todos/:id', function(req, res) {
    /*adding summary bar*/
    // res.status(500).send({"message": "not implemented"});
    let id = parseInt(req.params.id)
    let index = todos.findIndex(todo => todo.id === id)
    todos[index] = req.body.data
    res.json(todos[index])
  });

  // Node server.
  var port = 3000;
  var server = app.listen(port, function() {
    console.log('SERVER STARTED LISTENING ON PORT ' + port);
  });

  // Dev server.
  var devServer = require('../../tools/development-server');
  var devPort = 8080;

  devServer.listen(devPort, '0.0.0.0', () => {});
})();
