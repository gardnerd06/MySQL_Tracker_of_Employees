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


function addEmploy() {
    const addE = [{
        type: "input",
        name: "name",
        message: 'What is the first name of this employee?'
    },
    {
        type: "input",
        name: "last",
        message: 'What is the last name of this employee?'
    },
    {
        type: "number",
        name: "role",
        message: 'What role do they work in?',

    },
    {
        type: "number",
        name: "manager",
        message: 'Who is the manager of this employee?'
    }
    ];


    inquirer.prompt(addE).then((responses => {
        const sql = `INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ('${responses.name}','${responses.last}',${responses.role},${responses.manager})`;
        db.query(sql, function (err, results) { });
        db.query('SELECT * FROM employees', function (err, results) {
            console.table(results);
        });
    })
    );
};



module.exports = { addEmploy };
