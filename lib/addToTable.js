
const inquirer = require('inquirer')
const client = require('./connect')
const {checkLength} = require('./utils')

const {getDepartmentList, getRoleList,getEmployeeList} = require('./getList')


async function addDepartment() {
    const depList = await getDepartmentList()
    const input = await inquirer.prompt([
        {
            type: 'input',
            message: 'What is the name of the new department?',
            name: 'dep',
            validate: checkLength
        }
    ])

    if (!depList.filter(dep => dep.name == input).length)
        client.query(`INSERT INTO department(name) VALUES('${input.dep}');`, (err, res) => {
            if (err) {
                console.error("Department already exists");
            } else {
                console.log("Department inserted successfully!");
            }
        });
}

async function addRole() {
    const depList = await getDepartmentList()
    const input = await inquirer.prompt([
        {
            type: 'input',
            message: 'What is the name of the new role?',
            name: 'title',
            validate: checkLength
        },
        {
            type: 'input',
            message: 'What is the salary?',
            name: 'salary',
            validate: checkLength
        },
        {
            type: 'list',
            message: 'Please Select A Department',
            name: 'dep',
            choices: depList.map(dep => dep.name)
        }
    ])
    const depObj = depList.find(dep => dep.name == input.dep)
    client.query(`INSERT INTO role(title, salary, department_id) VALUES('${input.title}',${input.salary},${depObj.value});`, (err, res) => {
        if (err) {
            console.error(err);
        } else {
            console.log("Role inserted successfully!");
        }
    });

}

async function addEmployee() {
    const roleList = await getRoleList()
    const empList = await getEmployeeList()
    const input = await inquirer.prompt([
        {
            type: 'input',
            message: 'What is first name of the new employee?',
            name: 'firstName'
        },
        {
            type: 'input',
            message: 'What is last name of the new employee?',
            name: 'lastName'
        },
        {
            type: 'list',
            message: 'Please Choose a role',
            name: 'role',
            choices: roleList.map(role => role.title)
        },
        {
            type: 'list',
            message: 'Please Choose a manager',
            name: 'manager',
            choices: empList.map(emp => emp.name)
        }
    ])
    console.log(input)
    const roleObj = roleList.find(role => role.title == input.role)
    const empObj = empList.find(emp => emp.name == input.manager)

    console.log(roleObj)
    console.log(empObj)

    client.query(`INSERT INTO employee(first_name, last_name, manager_id, role_id) VALUES('${input.firstName}','${input.lastName}',${empObj.value},${roleObj.value});`, (err, res) => {
        if (err) {
            console.error(err);
        } else {
            console.log("Employee inserted successfully!");
        }
    });

}

async function updateEmployeeRole(){
    const roleList = await getRoleList()
    const empList = await getEmployeeList()
    const input = await inquirer.prompt([
        {
            type: 'list',
            message: 'Please Choose which employee to assign a new role',
            name: 'employee',
            choices: empList.map(emp => emp.name)
        },
        {
            type: 'list',
            message: 'Please Choose a New role',
            name: 'role',
            choices: roleList.map(role => role.title)
        },
        {
            type: 'list',
            message: 'Please Choose a New manager',
            name: 'manager',
            choices: empList.map(emp => emp.name)
        }
    ])
    const roleObj = roleList.find(role => role.title == input.role)
    const empObj = empList.find(emp => emp.name == input.employee)
    const manObj = empList.find(emp => emp.name == input.manager)

    client.query(`UPDATE employee SET role_id = '${roleObj.value}', manager_id ='${manObj.value}' WHERE id ='${empObj.value}';`, (err, res) => {
        if (err) {
            console.error(err)
        } else {
            console.log("Employee Role Updated successfully!")
        }
    })

}

module.exports = {addDepartment,addRole,addEmployee,updateEmployeeRole}