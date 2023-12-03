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

function promptUser(){
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the name of your project?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a short description explaining the what, why, and how of your project.'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What are the steps required to install your project?'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions and examples of what this project may be used for.'
        },
        {
            type: 'input',
            name: 'license',
            message: 'Please include any licenses that may apply to your project.'
        }
    ]);
}

function generateHTML(answers){
    return ``
}