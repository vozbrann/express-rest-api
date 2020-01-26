const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const apiRouter = require('./routes');

dotenv.config({ path: `${__dirname}/config/.env` });

const app = express();
const port = 3000;

// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: true,
}));

app.use('/', apiRouter);

// set port, listen for requests
app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));
