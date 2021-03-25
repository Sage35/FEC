const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const axios = require('axios');
const TOKEN = require('../config.js');
const compression = require('compression');
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

app.use(express.json());
app.use(compression());
app.use(express.static('dist'));

app.get('/*', function (req, res, next) {
  const url = `https://${process.env.EC2_URL}`; //TODO replace with process.env that updates to the EC2 Instance URL
  axios.get(url, {
    headers: {
      'AUTHORIZATION': TOKEN,
    }
  })
    .then((response) => {
      console.log('successful!');
      res.status(200).send(response.data);
    })
    .catch((err) => {
      console.error(err);
    });
});

app.post('/*', function (req, res, next) {
  const url = `https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc${req.url}`;
  const data = req.body;
  axios.post(url, data, {
    headers: {
      'Content-Type': 'application/json',
      'AUTHORIZATION': TOKEN,
    }
  })
    .then((response) => {
      console.log('successful!');
      res.status(201).send(response.data);
    })
    .catch((err) => {
      console.error(err);
    });
});

app.listen(port, "0.0.0.0", () => {
  console.log(`The Backers App listening at port ${port}`);
});