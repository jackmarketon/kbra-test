const express = require('express');
const bodyParser = require('body-parser');
const calculateScore = require('./calculateScore');

const app = express();

app.use(bodyParser.text());

app.post('/', (req, res) => {
  res.send(`Score: ${calculateScore(req.body)}`);
});

app.listen(3000, () => {
  console.log('Listening on port: 3000');
});
