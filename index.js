const inquirer = require('inquirer');
const getDept = require('./routes/dept');
const fetch = require('node-fetch');
const cTable = require('console.table');
// const db = require('./server');
const mysql = require('mysql2');
const addStuff = require('./routes/dept');

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
            message: 'What would you like to do?',
            choices: ['View all departments',
                'View all roles',
                'View all employees',
                'Add a department',
                'add a role',
                'add an employee',
                'update an emplyee?'],
            filter(input) {
                switch (input) {
                    case 'View all departments':
                        db.query('SELECT * FROM departments', function (err, results) {
                            console.table(results)
                        });
                        return results;
                    case 'View all roles':
                        db.query('SELECT * FROM roles', function (err, results) {
                            console.table(results);
                        });
                        return results;
                    case 'View all employees':
                        db.query('SELECT * FROM employees', function (err, results) {
                            console.table(results);
                        });
                        return results;
                    case 'Add a department':

                        return;
                    case 'add a role':

                        return;
                    case 'add an employee':

                        return;
                    case 'update an employee?':

                        return;
                }
            }
        },
        {
            type: "list",
            name: "addInfo",
            message: 'What would you like to add?',
            choices: ['departments', 'roles', 'employees'],
        },
        {
            type: "input",
            name: "Info",
            message: 'What info to add?',
            validate(value) {
                if (value !== "") return true;
                else console.log("You must enter valid info!");
            },
        }
    ]
    inquirer.prompt(questions)
        .then((answers) => {
            let name = answers.Info;
            let table = answers.addInfo;

            const answer = `INSERT INTO ${table} (name) Values ('${name}')`;
            db.query(answer, function (err, result) {
                if (err) throw err;

                db.query(`SELECT * FROM ${table}`, function (err, res) {
                    console.table(res);
                });
            })
        }
        )
};



module.exports = getQuest;

