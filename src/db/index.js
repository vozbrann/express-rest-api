const mysql = require('mysql');
require('dotenv').config({ path: `${__dirname}../../config/.env` });


const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  user: process.env.DB_USER,
  port: process.env.DB_PORT,
});

module.exports = connection;
