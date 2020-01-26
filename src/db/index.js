const mysql = require('mysql');

const connection = mysql.createConnection({
  connectionLimit: 10,
  password: 'admin',
  user: 'root',
  database: 'schoolapi',
  host: 'localhost',
  port: '3306',
});

module.exports = connection;
