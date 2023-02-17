const express = require('express');
const mysql = require('mysql2');
const inquirer = require('inquirer');


const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

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

db.query('SELECT * FROM tracker_names', function (err, results) {
    console.log(results);
});