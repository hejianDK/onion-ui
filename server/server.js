const express = require('express');

const SERVER_PORT = require('../const.json').SERVER_PORT;
const app = express();

app.get('/api', (req, res)=>{
  res.send('hello onion!');
});

app.listen(SERVER_PORT, () => {
  console.log(`listening port ${SERVER_PORT}`);
});

