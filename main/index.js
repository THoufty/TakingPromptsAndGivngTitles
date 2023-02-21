const inquirer = require("inquirer")
const fs = require("fs")
const Employee = require("./lib/employee")
const Engineer = require("./lib/engineer")
const Intern = require("./lib/intern")
const Manager = require("./lib/Manager")
const finalDoc = require('./src/fillFile')
const { run } = require("jest")
let group = []

function startMenu() {
  inquirer
    .prompt([
      {
        type: 'list',
        message: 'Build your group! Add a Manager, Engineer, or Intern!',
        name: 'addList',
        choices: ['New Manager', 'New Engineer', 'New Intern', 'Done']
      }
    ])
    .then((data) => {
      console.log(data.addList)
    })


newManager() => {
 inquirer
   .prompt([
      {
        type: 'input',
        message: `What is the manager's name?`,
        name: "name",
      },
      {
        type: 'input',
        message: `What is the manager's id?`,
        name: "id",
      },
      {
        type: "input",
        message: `what is the manager's email?`,
        name: "email",
      },
      {
        type: "input",
        message: `what is the manager's office number?`,
        name: "officeNumber",
      },
    ])
    .then((data) => {
      console.log(data)
    })
  }

newEngineer() => {
  inquirer
    .prompt([
         {
           type: 'input',
           message: `What is the engineer's name?`,
           name: "name",
         },
         {
           type: 'input',
           message: `What is the engineer's id?`,
           name: "id",
         },
         {
           type: "input",
           message: `what is the engineer's email?`,
           name: "email",
         },
         {
          type: "input",
          message: `what is the engineer's github?`,
          name: "github",
        },
       ])
       .then((data) => {
         console.log(data)
       })
     }

newIntern() => {
  inquirer
    .prompt([
           {
             type: 'input',
             message: `What is the intern's name?`,
             name: "name",
           },
           {
             type: 'input',
             message: `What is the intern's id?`,
             name: "id",
           },
           {
             type: "input",
             message: `what is the intern's email?`,
             name: "email",
           },
           {
            type: "input",
            message: `what is the intern's school?`,
            name: "school",
          },
         ])
         .then((data) => {
           console.log(data)
         })
       }

makeDoc() => {
  fs.writeFile('dist/team.html', finalDoc([arrayOfEmployees]), (err) => err ? console.error(err) : console.log('Success!'))
    })
  }

startMenu();
