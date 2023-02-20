const express = require('express');
const mysql = require('mysql2');
const inquirer = require('inquirer');
const getQuest = require('./index');
const cTable = require('console.table');


const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());



getQuest();
// Connect to my database
// const db = mysql.createConnection(
//     {
//         host: 'localhost',
//         user: 'root',
//         password: 'Motivation1',
//         database: 'business_db'
//     },
//     console.log(`Connected to the courses_db database.`)
// );

// handle requests to display department table
// app.get('/departments', (req, res) => db.query('SELECT * FROM departments', function (err, results) {
//     res.json(results);
// }));


app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT} 🚀`)
);
