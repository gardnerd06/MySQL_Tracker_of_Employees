const inquirer = require('inquirer');


function addRoles() {
    const addR = [{
        type: "input",
        name: "name",
        message: 'What the name of this employee?',

    },
    {
        type: "input",
        name: "salary",
        message: 'What salary goes with this employee?',

    },
    {
        type: "list",
        name: "department",
        message: 'What department do they work in?',
        choices: ['Engineering',
            'Finance',
            'Legal',
            'Sales',
            'Service'],

    }
    ];


    inquirer.prompt(addR).then((responses => console.log(`${responses.name} + ${responses.salary} + ${responses.department}`)));
};


module.exports = { addRoles };