const inquirer = require('inquirer')
const {printTable} = require('./utils')

async function firstQuestion() {
    return inquirer.prompt([
        {
            type: 'list',
            message: 'What do you want to do?',
            name: 'action',
            choices: ['view all departments', 'view all roles', 'view all employees', 'add a department', 'add a role', 'add an employee', 'update an employee role', 'quit']
        }
    ])

}

async function handleChoice(choice) {
    if (choice.action == 'quit') {
        return process.exit()
    }
    switch (choice.action) {
        case 'view all departments':
            printTable('department')
                .then(firstQuestion)
                .then(handleChoice)
            break
        case 'view all roles':
            printTable('role')
                .then(firstQuestion)
                .then(handleChoice)
            break
        case 'view all employees':
            printTable('employee')
                .then(firstQuestion)
                .then(handleChoice)
            break
        case 'add a department':
            addDepartment()
                .then(firstQuestion)
                .then(handleChoice)
            break
        case 'add a role':
            addRole()
                .then(firstQuestion)
                .then(handleChoice)
            break
        case 'add an employee':
            addEmployee()
                .then(firstQuestion)
                .then(handleChoice)
            break
        case 'update an employee role':
            updateEmployeeRole()
                .then(firstQuestion)
                .then(handleChoice)
            break

    }


}

async function runPrompt(){
    firstQuestion()
    .then(res => handleChoice(res))
}

module.exports = runPrompt