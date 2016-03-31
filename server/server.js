var express = require('express');
var bodyParser = require('body-parser');
var SERVER_PORT = require('../const.json').SERVER_PORT;
var TodoService = require('./service/TodoService');

var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var todoService = new TodoService();

app.get('/api/todo', (req, res) => {
  todoService.getTodos()
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res.status(500).send({
        name: error.name,
        message: error.message
      });
    });
});

app.get('/api/todo/:id', (req, res) => {
  todoService.getTodoById(req.params.id)
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res.status(404).send({
        name: error.name,
        message: error.message
      });
    });
});

app.post('/api/todo/', (req, res) => {
  todoService.addNewTodo(req.body)
    .then((data) => {
      res.status(201).send(data);
    })
    .catch((error) => {
      res.status(500).send({
        name: error.name,
        message: error.message
      });
    });
});

app.put('/api/todo/:id', (req, res) => {
  const todo = req.body;
  if(req.params.id != todo.id) {
    res.status(500).send({
      name: 'id not matched',
      message: `todo item with id ${todo.id} not matching the id ${req.params.id}`
    });
  }
  todoService.updateTodo(req.body)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((error) => {
      res.status(500).send({
        name: error.name,
        message: error.message
      });
    });
});

app.delete('/api/todo/:id', (req, res) => {
  todoService.deleteTodo(req.params.id)
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res.status(500).send({
        name: error.name,
        message: error.message
      });
    });
});

app.listen(SERVER_PORT, () => {
  console.log(`listening port ${SERVER_PORT}`);
});

