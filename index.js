const client = require('./lib/connect')
const runPrompt = require('./lib/prompt')

client.connect()
runPrompt()