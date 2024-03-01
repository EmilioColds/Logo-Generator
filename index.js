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

    const shape = eval(`new ${answers.shapeLogo} ('${answers.shapeColor}')`);
    const svgImage = `<svg version="1.1" width="300" height="200" xmls="http://www.w3.org/2000/svg">\n` + 
                     ` ${shape.svg()}\n` + 
                     ` <text x="150" y="125" font-size="60" text-anchor="middle" fill="${answers.textColor}">${answers.textLogo}</text>\n` + 
                     `</svg>`;

    fs.writeFileSync('logo.svg', svgImage);
    console.log('Generated logo.svg');
}

main().catch(console.error);