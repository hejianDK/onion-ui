var express = require('express');
var SERVER_PORT = require('../const.json').SERVER_PORT;
var useMiddlewares = require('./utils/useMiddlewares');
var buildEndpoints = require('./utils/buildEndpoints');

var app = express();

app = useMiddlewares(app);
app = buildEndpoints(app);

app.listen(SERVER_PORT, () => {
  console.log(`listening port ${SERVER_PORT}`);
});

