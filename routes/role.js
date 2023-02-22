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


function addRoles() {
    const addR = [{
        type: "input",
        name: "name",
        message: 'What the name of this employee?',

    },
    {
        type: "number",
        name: "salary",
        message: 'What salary goes with this employee?',

    },
    {
        type: "number",
        name: "department",
        message: 'What department do they work in?',


    }
    ];


    inquirer.prompt(addR).then((responses => {
        const rosql = `INSERT INTO roles (title, salary, department_id) VALUES ('${responses.name}',${responses.salary},${responses.department})`;
        db.query(rosql, function (err, results) { });
        db.query('SELECT * FROM roles', function (err, results) {
            console.table(results);
        });
    })
    )
};


module.exports = { addRoles };