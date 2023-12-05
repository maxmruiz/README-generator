/**
 * // Importing modules
const inquirer = require('inquirer');
const fs = require('fs');

function promptUser() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?'
        },
        {
            type: 'input',
            name: 'food',
            message: 'What is your favorite food?'
        },
        {
            type: 'input',
            name: 'place',
            message: 'Where are you from?'
        },
        {
            type: 'input',
            name: 'bio',
            message: 'Write a short description about yourself'
        },
        {
            type: 'checkbox',
            name: 'languages',
            message: 'What languages do you know?',
            choices: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Python', 'React', 'C#']
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub profile URL:'
        }
    ]);
}

function generateHTML(answers) {
    return `
    ${answers.name}
    ${answers.food}
    ${answers.place}
    ${answers.bio}
    ${answers.languages}
    ${answers.github}
    `;
    //HTML will go here
}

promptUser()
    .then(answers => {
        const htmlContent = generateHTML(answers);
        fs.writeFile('portfolio.html', htmlContent, err => {
            if (err) {
                console.error('Error writing file', err);
                return;
            }
            console.log('Portfolio generated');
        });
    })
    .catch(err => {
        console.error('Error', err);
    });

 */

const inquirer = require('inquirer');
const fs = require('fs');

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a description of your project:'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter installation instructions:'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter usage information:'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Enter contribution guidelines:'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Enter test instructions:'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your application:',
        choices: ['MIT', 'GPLv3', 'Apache 2.0', 'BSD 3-Clause', 'None']
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username:'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address:'
    }
];

function generateREADME(answers){
    return `
    # ${answers.title}
    
    ## Description
    ${answers.description}
    
    ## Table of Contents
    - [Installation](#installation)
    - [Usage](#usage)
    - [License](#license)
    - [Contributing](#contributing)
    - [Tests](#tests)
    - [Questions](#questions)

    ## Installation
    ${answers.installation}

    ## Usage
    ${answers.usage}

    ## Contributing
    ${answers.contributing}

    ## Tests
    ${answers.tests}

    ## License
    ${answers.license}

    ## Questions
    For any questions please email me at [${answers.email}](mailto:${answers.email}).

    Github: ${answers.github}(https://github.com/${answers.github})
    `;
}

function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data);
}

function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        const readMeContent = generateREADME(answers);
        writeToFile('README.md', readMeContent);
    })
    .catch((error) => {
        console.log('Could not create file:', error);
    });
}

init();