const inquirer = require('inquirer');
const mysql = require('mysql2');

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'Motivation1',
        database: 'business_db'
    },

);


function adddept() {
    const dept = [{

        type: "input",
        name: "name",
        message: 'What department name do you wish to add?',



    }];
    inquirer.prompt(dept).then((responses => {
        const depsql = `INSERT INTO departments (name) VALUES ('${responses.name}')`;
        db.query(depsql, function (err, results) { });
        db.query('SELECT * FROM departments', function (err, results) {
            console.table(results);
        });
    }))

};

module.exports = { adddept };