const inquirer = require('inquirer');

function adddept() {
    const dept = [{

        type: "input",
        name: "name",
        message: 'What department name do you wish to add?',



    }];
    inquirer.prompt(dept).then((responses => {
        console.info(responses.name);
    }))

};

module.exports = { adddept };