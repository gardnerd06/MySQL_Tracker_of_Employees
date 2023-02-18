const express = require('express');
const mysql = require('mysql2');
const inquirer = require('inquirer');
const questions = require('./index');


const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/index', questions);

// Connect to my database
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'Motivation1',
        database: 'tracker_db'
    },
    console.log(`Connected to the courses_db database.`)
);

// handle requests to display department table
app.get('/', (req, res) => db.query('SELECT * FROM department_db', function (err, results) {
    res.json(results);
}));


app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT} 🚀`)
);


