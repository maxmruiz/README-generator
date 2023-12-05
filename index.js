// Importing necessary packages
import inquirer from 'inquirer';
import fs from 'fs';

// Declaring each necessary question pertaining to README to an array
const questions = [
    {
        type: 'input',
        name: 'title', // name: is how I will be calling each questions answer
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

// Creating the template for README, ${answers...} is the answer the user provided for each appropriate section
function generateREADME(answers){
    return`
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

// Declaring a function to create the README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data);
}

// init() is where the file is being created. Once each question has been answered, a README.md file will be creating using the template with the users answers
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

// Calling init() to run
init();