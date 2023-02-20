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

    inquirer.prompt().then((responses => db.query(`UPDATE ${responses.add} SET name = '${responses.thing} WHERE id = 1'`)))
};


module.exports = { add };