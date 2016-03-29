var express = require('express');
var bodyParser = require('body-parser');
var buildRouter = require('./buildRouter');

const useMiddlewares = (app) => {
  var router = buildRouter(express.Router());

  // add middlewares here
  app.use('/', router);
  app.use(bodyParser.json());

  return app;
};

module.exports = useMiddlewares;
