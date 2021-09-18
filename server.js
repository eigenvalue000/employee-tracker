const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      // MySQL password
      password: '059Cy[0ebm1[',
      database: 'ems_db'
    },
    console.log(`Connected to the ems_db database.`)
  );

  app.get('/', (req, res) => {
      db.query('SHOW databases', 
      function (err, results) {
          res.json(results);
      })
  });

  app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
  });