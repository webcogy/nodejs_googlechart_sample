const express = require('express');
const app = express();
app.set('view engine', 'ejs');

const data = [
  ['Day', 'Sales'],
  ['Monday', 10],
  ['Tuesday', 8],
  ['Wednesday', 12],
  ['Thursday', 6],
  ['Friday', 14],
  ['Saturday', 18],
  ['Sunday', 10]
];

app.get('/', (req, res) => {
  res.render('index', { data: data });
});


/************************
 *
 * DB ↓
 *
 ************************/
/*
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'username',
  password: 'password',
  database: 'database_name'
});

connection.query('SELECT * FROM table_name', function (error, results, fields) {
  if (error) throw error;

  console.log(results);

  results.forEach(result => {
    console.log(result.column_name);
  });

  connection.end();
});
*/



app.listen(3000, () => {
  console.log('Server started on port 3000');
});
