var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var _ = require('lodash');

var todos = [
    {
        id: 1,
        text: 'todo1',
        isDone: true
    }, {
        id: 2,
        text: 'todo2',
        isDone: false
    }, {
        id: 3,
        text: 'todo3',
        isDone: true
    }, {
        id: 4,
        text: 'todo4',
        isDone: false
    }
];

var app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.send('hi onion');
});


app.get('/todos', function (req, res) {
    res.send(todos);
});

app.put('/todos/:id', function (req, res) {
    console.log(req.body);
    var id = req.params.id;
    var todo = req.body;
    var updatedTodo = updateTodo(id, todo);
    res.send(updatedTodo);
});

app.post('/todos/', function (req, res) {
    var id = _.maxBy(todos, 'id').id + 1;
    var body = req.body;
    var newTodo = Object.assign({}, {id: id}, {
        text: body.text,
        isDone: false
    });
    todos.push(newTodo);
    res.send(newTodo);
});

function updateTodo(id, todo) {
    var index = _.findIndex(todos, function(todo) {
        return todo.id == id;
    });
    todos[index] = Object.assign({}, todos[index], {
        isDone: todo.isDone,
        text: todo.text
    });

    return todos[index];
}

app.listen(3333, function () {
    console.log('Listening port 3333');
});