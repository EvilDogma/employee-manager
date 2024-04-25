const cTable = require('console.table');

const client = require('./connect')

async function getTable(choice) {
    const queryString = `SELECT * FROM ${choice}`
    const { rows } = await client.query(queryString)
    return rows
}

async function printTable(choice) {
    const rows = await renderTable(choice)
    console.table(rows);
}

async function renderTable(choice) {
    let queryString
    switch (choice) {
        case 'department':
            queryString = `SELECT name AS "Department Name", id AS "Department ID" FROM department;`
            break
        case 'role':
            queryString = `SELECT role.id "Role ID", role.title "Job Title", department.name "Department", role.salary "Salary" FROM role JOIN department ON department_id = department.id;`
            break
        case 'employee':
            queryString = `SELECT employee.id "Employee ID", employee.first_name "First Name", employee.last_name "Last Name", role.title "Job Title",department.name "Department", role.salary "Salary", manager.first_name || ' ' || manager.last_name "Manager" FROM employee JOIN role ON role_id = role.id JOIN department ON role.department_id = department.id LEFT JOIN employee AS manager on employee.manager_id = manager.id;`
            break
    }
    const { rows } = await client.query(queryString)
    return rows
}

module.exports = { getTable, printTable }