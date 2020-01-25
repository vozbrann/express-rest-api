const express = require('express');
const dotenv = require('dotenv');

dotenv.config({ path: `${__dirname}/config/.env` });

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World, from express');
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));
