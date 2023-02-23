const inquirer = require('inquirer');
const fetch = require('node-fetch');
const cTable = require('console.table');
const mysql = require('mysql2');
const updateStuff = require('./routes/update');
const addDept = require('./routes/depart');
const addEmployee = require('./routes/employee');
const addRole = require('./routes/role');



const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'Motivation1',
        database: 'business_db'
    },
    console.log(`Connected to the courses_db database.`)
);


function getQuest() {
    const questions = [
        {
            type: "list",
            name: "todo",
            message: 'What would you like to do?'['use arrow keys'],
            loop: true,
            choices: ['View all departments',
                'View all roles',
                'View all employees',
                'Add a department',
                'add a role',
                'add an employee',
                'update an employee?'],
            filter(input) {
                switch (input) {
                    case 'View all departments':
                        db.query('SELECT * FROM departments', function (err, results) {
                            console.table(results);
                            getQuest();
                        });
                        return;
                    case 'View all roles':
                        db.query('SELECT * FROM roles', function (err, results) {
                            console.table(results);
                            getQuest();
                        });
                        return;
                    case 'View all employees':
                        db.query(`SELECT departments.name, roles.title, roles.salary, employees.first_name, employees.last_name
                        FROM departments
                        INNER JOIN roles ON departments.dept_id=roles.department_id
                        INNER JOIN employees ON roles.r_id=employees.role_id`, function (err, results) {
                            console.table(results);
                            getQuest();
                        });
                        return;
                    case 'Add a department':
                        this.async(addDept.adddept());
                        return;
                    case 'add a role':
                        this.async(addRole.addRoles());
                        return;
                    case 'add an employee':
                        this.async(addEmployee.addEmploy());

                        return;
                    case 'update an employee?':
                        this.async(updateStuff.add());
                        return;
                }
            }
        }
    ]
    inquirer.prompt(questions)
        .then((answers) => {

        }
        )
};



module.exports = { getQuest, db };

