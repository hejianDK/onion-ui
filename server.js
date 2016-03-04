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
    setTimeout(function () {
        res.send(todos);
    }, 1500);

});

app.put('/todos/:id', function (req, res) {
    var id = req.params.id;
    var todo = req.body;
    console.log(req.body);
    setTimeout(function() {
        var updatedTodo = updateTodo(id, todo);
        res.send(updatedTodo);
    }, 1500);
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