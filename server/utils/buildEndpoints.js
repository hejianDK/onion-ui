const buildEndpoints = (app) => {

  // add endpoints here
  app.get('/api', (req, res) => {
    res.send('hello onion!');
  });

  app.get('/api/hello', (req, res) => {
    res.send('helloooooooooooooooooooo');
  });

  app.get('*', (req, res, next) => {
    res.status(404).send('Page not found');
    next();
  }, (req, res) => {
    console.log(` | INFO: Response status: ${res.statusCode}`);
  });

  return app;
};

module.exports = buildEndpoints;
