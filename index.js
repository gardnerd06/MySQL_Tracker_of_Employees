const inquirer = require('inquirer');
function getQuest() {
    const questions = [
        {
            type: "list",
            name: "todo",
            message: '',
            choices: ['View all departments',
                'View all roles',
                'View all employees',
                'Add a department',
                'add a role',
                'add an employee',
                'update an emplyee?']
        },

    ];

    inquirer.prompt(questions)
        .then((answers) => {
            console.log(answers);
        })
};
getQuest();

module.exports = getQuest;