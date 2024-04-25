const client = require('./lib/connect')
const runPrompt = require('./lib/prompt')
const figlet = require('figlet')


client.connect()
figlet(`---------
| Employee |
|   Manager    |
---------`, function (err, data) {
    if (err) {
      console.log(err)
      return
    }
    console.log(data)
}).then(runPrompt)