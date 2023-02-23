const inquirer = require('inquirer');
const { default: Choices } = require('inquirer/lib/objects/choices');
const mysql = require('mysql2');

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'Motivation1',
        database: 'business_db'
    },

);


function add() {
    const addStuff = [{
        type: "list",
        name: "select",
        message: 'Which Employee would you like to update?',
        choices: [db.query(`select first_name, last_name, role_id from employees`, function (err, results) { console.log(results) })]

    },
    {
        type: "number",
        name: "newRole",
        message: 'What is their new role?',

    },
    ];


    inquirer.prompt(addStuff).then((responses => {
        const upsql = `UPDATE employees SET role_id = "${responses.newRole}" WHERE e_id = ${responses.select}`;
        db.query(upsql, function (err, results) { });
        db.query('SELECT * FROM employees', function (err, results) {
            console.table(results);
        });
    }))
};


module.exports = { add };

// db.query(`select first_name, last_name, role_id from employees`, function (err, results) { });