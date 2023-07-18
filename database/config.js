const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'reno',
  password:'Mistral',
  database: 'Examen'
});

module.exports = connection
