const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'reno',
  password:'Mistral',
  database: 'examen'
});

module.exports = connection
