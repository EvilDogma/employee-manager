const { Client } = require('pg')
const client = new Client({
    host: 'localhost',
    user: 'postgres',
    password: 'pass',
    database: 'business_db'
})
module.exports = client