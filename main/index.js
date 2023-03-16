const inquirer = require("inquirer")
const fs = require("fs")
const Engineer = require("./lib/engineer")
const Intern = require("./lib/intern")
const Manager = require("./lib/manager")
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
      },
    ])
    .then((data) => {
      console.log("look here", data.addList)
      if (data.addList === 'New Manager') {
        newManager();
      }
      if (data.addList === 'New Engineer') {
        newEngineer();
      }
      if (data.addList === 'New Intern') {
        newIntern();
      }
      if (data.addList === 'Done') {
        makeDoc();
      }
    });
  }

function newManager() {
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
      console.log(data);
      const manager = new Manager(data.name, data.id, data.email, data.officeNumber);
      group.push(manager);
      startMenu();
    })
  }

function newEngineer(){
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
        console.log(data);
        const engineer = new Engineer(data.name, data.id, data.email, data.github);
        group.push(engineer);
        startMenu();
       })
     }

function newIntern() {
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
          console.log(data);
          const intern = new Intern(data.name, data.id, data.email, data.school);
          group.push(intern);
          startMenu();
         })
       }

function makeDoc() {
  fs.writeFile('./dist/team.html', finalDoc(group), (err) => err ? console.error(err) : console.log('Success!'))
    }
  

startMenu();
