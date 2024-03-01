const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Triangle, Square } = require('./lib/shapes');

async function main() {
    const answers = await inquirer.prompt([
        {
            type: 'input', 
            name: 'textLogo',
            message: 'Please enter max. 3 characters:',
            validate: input => input.length <= 3
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Please enter a color for your text in keyword or hex format:'
        },
        {
            type: 'list',
            name: 'shapeLogo',
            message: 'Please choose one of the folloring shapes:',
            choices: ['Circle', 'Triangle', 'Square']
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Please enter a color for your shape in keyword or hex format:'
        }
    ]);
}