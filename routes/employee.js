const inquirer = require('inquirer');


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
        type: "list",
        name: "role",
        message: 'What role do they work in?',
        choices: ['Engineering',
            'Finance',
            'Legal',
            'Sales',
            'Service'],
    },
    {
        type: "input",
        name: "manager",
        message: 'Who is the manager of this employee?'
    }
    ];


    inquirer.prompt(addE).then((responses => console.log(`${responses.name} + ${responses.last} + ${responses.role} + ${responses.manager}`)));
};


module.exports = { addEmploy };