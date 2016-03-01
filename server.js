var express = require('express');
var bodyParser = require('body-parser');

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
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.send('hi onion');
});
app.get('/todos', function (req, res) {
    setTimeout(function () {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
        res.send(todos);
    }, 1500);

});



//app.post('/counters/', (req, res, next) => {
//    var newId = counters.reduce((maxId, counter) => Math.max(counter.id, maxId), -1) + 1;
//    var counterToAdd = Object.assign({}, {
//        id: newId,
//        name: "counter"+newId,
//        value: 0,
//        count: 0
//    });
//
//    setTimeout(() => {
//        let rand = Math.random() - 0.5;
//        if( rand > 0 ) {
//            counters.push(counterToAdd);
//            res.header("Access-Control-Allow-Origin", "*")
//                .header("Access-Control-Allow-Headers", "X-Requested-With")
//                .status(201)
//                .send(counterToAdd);
//        } else {
//            res.header("Access-Control-Allow-Origin", "*")
//                .header("Access-Control-Allow-Headers", "X-Requested-With")
//                .status(500)
//                .send({
//                    status: 500,
//                    message: 'random server error ' + rand
//                })
//        }
//
//    }, 1000);
//});



app.listen(3333, function () {
    console.log('Listening port 3333');
});