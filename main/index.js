// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const fs = require("fs")
const generateMarkdown = require("./utils/generateMarkdown")

// TODO: Create an array of questions for user input
const questions = ['What is your name?', 'what is your Email?', 'give a brief description of your project.', 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.', 'what instructions are needed to use your project?', 'what kind of license does your project use?','what is your github username?', 'what is the title of your project?'];

// TODO: Create a function to write README file
// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt([
      {
        type: 'input',
        message: questions[6],
        name: "github",
      },
      {
        type: 'input',
        message: questions[0],
        name: "name",
      },
      {
        type: "input",
        message: questions[1],
        name: "email",
      },
      {
        type: "input",
        message: questions[2],
        name: "desc",
      },
      {
        type: "input",
        message: questions[3],
        name: "install",
      },
      {
        type: 'input',
        message: questions[4],
        name: "usage",
      },
      {
        type: 'input',
        message: questions[7],
        name: "title",
      },
      {
        type: "checkbox",
        message: questions[5],
        name: "license",
        choices: ["MIT", "Apache License 2.0", "Eclipse Public License 2.0"],
      },
    ])

    .then(response => {
      let markdownString = generateMarkdown(response)
      fs.writeFile('team.html', markdownString, (err) => err ? console.error(err) : console.log('Success!'))
    })
}
// Function call to initialize app
init();
