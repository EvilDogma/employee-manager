const cTable = require('console.table');

const client = require('./connect')

async function getTable(choice) {
    const queryString = `SELECT * FROM ${choice}`
    const { rows } = await client.query(queryString)
    return rows
}

async function printTable(choice) {
    const rows = await getTable(choice)
    console.table(rows);
}

module.exports = { getTable, printTable }