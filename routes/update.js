const inquirer = require('inquirer');


function add() {
    const addStuff = [{
        type: "list",
        name: "add",
        message: 'What would you like to update?',
        choices: ['Department',
            'Roles',
            'Employees',
        ],
    },
    {
        type: "input",
        name: "thing",
        message: 'What info to update?',

    },
    ];


    inquirer.prompt(addStuff).then((responses => console.log(`${responses.add} + ${responses.thing}`)));
};


module.exports = { add };